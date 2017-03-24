import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Face } from "../face";
import { IdentifyResult, IdentifyService } from "../identify.service";
import { Person } from "../person";
import { DetectFaceService } from "../detect-face.service";
import { FetchPersonService } from "../fetch-person.service";
import { Subscription } from "rxjs/Subscription";
import { WebcamStorageService } from "../../shared/webcam-storage.service";

@Component({
  selector: 'app-identify-person',
  templateUrl: './identify-person.component.html'
})
export class IdentifyPersonComponent implements OnInit {
        
    // get the element with the #chessCanvas on it
    @ViewChild('layout') canvasRef;
    image = 'http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png';
    private sub: Subscription;

    imageURL:string;
    public identifyResult:string;
    private isStillRunning:Boolean = false;

  constructor(
        private sanitizer:DomSanitizer, 
        private element:ElementRef,
        private detectFaceService:DetectFaceService,
        private identifyPersonService:IdentifyService,
        private fetchPerson:FetchPersonService,
        private localService:WebcamStorageService 
  ) {
    // nothing here yet
   }

  ngOnInit() {
    let timer = Observable.timer(7000,10000);
    this.sub = timer.subscribe(t =>
                this.isStillRunning 
                    ? console.log("still running ") // do nothing
                    : this.identify()
        );
  }


  identify() {
    this.isStillRunning = true;
    
    let  pictureDataToBeUsedForDetection:Blob = this.localService.getLatestScreenShot();
    this.imageURL = this.localService.getLatestUrl();
    this.identifyResult = "";
    // 1. detect the face from the picture 
    this.detectFaceService
            .detectFace(pictureDataToBeUsedForDetection)
            .subscribe(response => {
                    // use response face to identify a person 
                    let faces:Face[] = response;
                    this.isStillRunning = false;

                    this.drawImage(faces);
                    this.identifyResult = this.identifyResult + "Alter: " +  faces[0].faceAttributes.age + "\n";
                    this.identifyResult = this.identifyResult + "Geschlecht: " +  faces[0].faceAttributes.gender + "\n";
                    this.identifyResult = this.identifyResult + "Brille: " +  faces[0].faceAttributes.glasses + "\n";
                    this.identifyResult = this.identifyResult + "Lachen: " +  faces[0].faceAttributes.smile + "\n";
                    this.identifyResult = this.identifyResult + "Angry?: " +  faces[0].faceAttributes.emotion.anger + "\n";
                    this.identifyResult = this.identifyResult + "Happy?: " +  faces[0].faceAttributes.emotion.happiness + "\n";
                    this.identifyResult = this.identifyResult + "Sad?: " +  faces[0].faceAttributes.emotion.sadness + "\n";
                    this.identifyPersonService
                        .identify(faces[0].faceId)
                        .subscribe(response => {
                            let idResult:IdentifyResult[] = response;
                            idResult[0].candidates.forEach(candidate => {
                                console.log(candidate);
                                this.fetchPerson.getPerson(candidate.personId)
                                                .subscribe(response => {
                                                    let person:Person = response;
                                                    // use the response to fetch the person or not 
                                                    this.identifyResult = this.identifyResult + "Name?: " +  person.name + "\n";
                                                })
                            })
                            
                        });
            });

    //this.drawImage();
      // happy drawing from here on
      //context.fillStyle = 'blue';
      //context.fillRect(10, 10, 150, 150);

      
  }


  drawImage(faces:Face[]) {
    let canvas = document.createElement('canvas'); //this.canvasRef.nativeElement;
    let context = canvas.getContext('2d');

    let source = new Image(); 
    source.crossOrigin = 'Anonymous';
    source.onload = () => {
        canvas.height = source.height;
        canvas.width = source.width;
        context.drawImage(source, 0, 0);

        

        for (let fac of faces) {
            context.beginPath();
            context.lineWidth=6;
            context.strokeStyle="red";
            context.rect(fac.faceRectangle.left, fac.faceRectangle.top, fac.faceRectangle.width, fac.faceRectangle.height);
            context.stroke();
        }
        

        this.imageURL = canvas.toDataURL();  
    };
    source.src = this.imageURL;
  }

    ngOnDestroy(){
        this.sub.unsubscribe();

    }




}
