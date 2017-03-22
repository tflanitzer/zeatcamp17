import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { DetectFaceService } from "app/detect-face.service";
import { Face } from "app/face";
import { IdentifyService, IdentifyResult } from "app/identify.service";
import { FetchPersonService } from "app/fetch-person.service";
import { Person } from "app/person";
import { Observable } from "rxjs/Observable";
import { FaceRecognitionServiceService } from "app/face-recognition-service.service";

@Component({
  selector: 'app-identify-person',
  templateUrl: './identify-person.component.html',
  styleUrls: ['./identify-person.component.css']
})
export class IdentifyPersonComponent implements OnInit {

    public videosrc:any;
    imageURL:string;
    imageURLAsString:string;
    private _videoStream:any;
    public identifyResult:string;
    private isStillRunning:Boolean = false;

  constructor(
        private sanitizer:DomSanitizer, 
        private element:ElementRef,
        private detectFaceService:DetectFaceService,
        private identifyPersonService:IdentifyService,
        private fetchPerson:FetchPersonService,
        private localService:FaceRecognitionServiceService 
  ) {
    // nothing here yet
   }

  ngOnInit() {
    let timer = Observable.timer(7000,7000);
        timer.subscribe(t =>
                this.isStillRunning 
                    ? console.log("still running ") // do nothing
                    : this.identify()
        );
  }


  identify() {
    this.isStillRunning = true;
    
    let  pictureDataToBeUsedForDetection:Blob = this.localService.getLatestScreenShot();
    this.identifyResult = "";
    // 1. detect the face from the picture 
    this.detectFaceService
            .detectFace(pictureDataToBeUsedForDetection)
            .subscribe(response => {
                    // use response face to identify a person 
                    let faces:Face[] = response;
                    
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
                            this.isStillRunning = false;
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

      
  }



}
