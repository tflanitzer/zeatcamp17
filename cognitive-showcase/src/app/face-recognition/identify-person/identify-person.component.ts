import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Face } from "app/face-recognition/face";
import { IdentifyResult, IdentifyService } from "app/face-recognition/identify.service";
import { Person } from "app/face-recognition/person";
import { DetectFaceService } from "app/face-recognition/detect-face.service";
import { FetchPersonService } from "app/face-recognition/fetch-person.service";
import { WebcamStorageService } from "app/shared/webcam-storage.service";
import { Subscription } from "rxjs/Subscription";
import { SpeakerService } from "app/shared/speaker.service";

@Component({
    selector: 'app-identify-person',
    templateUrl: './identify-person.component.html',
    styleUrls: ['./identify-person.component.css']
})
export class IdentifyPersonComponent implements OnInit {

    private sub: Subscription;
    private imageURL: string;

    constructor(
        private sanitizer: DomSanitizer,
        private element: ElementRef,
        private detectFaceService: DetectFaceService,
        private identifyPersonService: IdentifyService,
        private fetchPerson: FetchPersonService,
        private localService: WebcamStorageService,
        private speaker: SpeakerService
    ) {
        // nothing here yet
    }

    ngOnInit() {
        let timer = Observable.timer(7000, 10000);
        this.sub = timer.subscribe(t =>
            this.identify()
        );
    }


    identify() {

        let pictureDataToBeUsedForDetection: Blob = this.localService.getLatestScreenShot();
        this.imageURL = this.localService.getLatestUrl();
        // 1. detect the face from the picture 
        this.detectFaceService
            .detectFace(pictureDataToBeUsedForDetection)
            .subscribe(response => {
                // use response face to identify a person 

                let faces: Face[] = response;
                this.identifyFaces(faces).subscribe(result => {
                    this.speakGreeting(result);

                    this.drawImage(result);
                })

            });
    }

    speakGreeting(faces: Face[]) {
        let greeting = "";

        if (faces.length === 1) {
            greeting = `${this.getName(faces[0])}. Du siehst aus wie ${Math.floor(faces[0].faceAttributes.age)}`;
        } else {
            for (let face of faces) {
                if (face.name) {
                    if (greeting !== "") {
                        greeting = greeting + "und ";
                    }

                    greeting = greeting + this.getName(face);
                }
            }
        }

        if (greeting !== "") {
            greeting = "Hallo " + greeting;
            this.speaker.speak(greeting);
        }
    }

    getName(face: Face): string {
        let name = face.name;

        if (name === "unknown") {
            if (face.faceAttributes.gender == "male") {
                name =  "Unbekannter";
            } else {
                name = "Unbekannte";
            }
        }

        return name;
    }

    identifyFaces(faces: Face[]): Observable<Face[]> {


        let identityPromises = faces.map(face => {

            return this.getNamedFace(face);
        });

        return Observable.forkJoin(identityPromises);
    }


    getNamedFace(face: Face): Observable<Face> {
        return this.identifyPersonService.identify(face.faceId)
            .map(identifyResult => {
                let idResult: IdentifyResult[] = identifyResult
                return idResult;
            })
            .concatMap(id => {
                if (id[0].candidates.length == 0) {
                    return Observable.of("unknown");
                } else {
                    return this.fetchPerson.getPerson(id[0].candidates[0].personId)
                        .map(person => person.name)
                }
            })
            .map(name => {
                face.name = name;
                return face;
            })
    }



    drawImage(faces: Face[]) {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        let source = new Image();
        source.crossOrigin = 'Anonymous';
        source.onload = () => {
            canvas.height = source.height;
            canvas.width = source.width;
            context.drawImage(source, 0, 0);
            context.lineWidth = 3;
            context.strokeStyle = "red";
            context.fillStyle = "red";
            context.font = "14px Arial";
            var lineHeight = context.measureText("M").width * 1.2;

            for (let fac of faces) {
                context.beginPath();

                // draw rectangle
                context.rect(fac.faceRectangle.left, fac.faceRectangle.top, fac.faceRectangle.width, fac.faceRectangle.height);
                context.stroke();

                // name 
                context.fillText(fac.name, fac.faceRectangle.left + fac.faceRectangle.width + 6, fac.faceRectangle.top);

                // draw description
                var y = fac.faceRectangle.top + lineHeight + 10;
                var textTowrite = "Age: " + fac.faceAttributes.age;
                context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);

                y += lineHeight;
                textTowrite = fac.faceAttributes.gender;
                context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);

                if (fac.faceAttributes.glasses != "NoGlasses") {
                    y += lineHeight;
                    textTowrite = fac.faceAttributes.glasses;
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }

                if (fac.faceAttributes.smile > 0.5) {
                    y += lineHeight;
                    textTowrite = "Lachen";
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }

                if (fac.faceAttributes.emotion.anger > 0.5) {
                    y += lineHeight;
                    textTowrite = "Anger";
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }

                if (fac.faceAttributes.emotion.happiness > 0.5) {
                    y += lineHeight;
                    textTowrite = "Happy";
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }

                if (fac.faceAttributes.emotion.surprise > 0.5) {
                    y += lineHeight;
                    textTowrite = "Suprise";
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }


                if (fac.faceAttributes.emotion.sadness > 0.5) {
                    y += lineHeight;
                    textTowrite = "Sad";
                    context.fillText(textTowrite, fac.faceRectangle.left + fac.faceRectangle.width + 6, y);
                }


            }
            this.imageURL = canvas.toDataURL();
        };
        source.src = this.imageURL;
    }



    ngOnDestroy() {
        this.sub.unsubscribe();

    }




}
