import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { DetectFaceService } from "app/detect-face.service";
import { AddPersonFaceService} from 'app/add-person-face.service';
import { TrainService } from "app/train.service";
import { FaceRecognitionServiceService } from "app/face-recognition-service.service";
import { Observable } from "rxjs/Observable";



@Component({
  selector: 'app-train-person',
  templateUrl: './train-person.component.html',
  styleUrls: ['./train-person.component.css']
})
export class TrainPersonComponent implements OnInit {
    
    private sizeOfSample: number = 0;

    private personId:string = "6d0b2806-e7a0-40e8-ba38-3065f43957a3";
    public videosrc:any;
    imageURL:string;
    imageURLAsString:string;
    private _videoStream:any;

    constructor(
          private sanitizer:DomSanitizer, 
          private element:ElementRef, 
          private detectFaceService:DetectFaceService, 
          private addPersonFaceService:AddPersonFaceService, 
          private trainService:TrainService,
          private localService:FaceRecognitionServiceService

    ) {
    }

    ngOnInit() {
        let timer = Observable.timer(8000,7000);
        timer.subscribe(t =>
          {if (this.sizeOfSample > 9) {

          } else {
            this.addFace()
          }}
        );
    }

    

    addFace() {
      // 1. detect the face from the picture 
      let  pictureDataToBeUsedForDetection = this.localService.getLatestScreenShot();
      this.detectFaceService.detectFace(pictureDataToBeUsedForDetection).subscribe(response => { console.log(response)});

      // 2. add person-face to person training setTimeout
      this.addPersonFaceService.addFaceToPerson("6d0b2806-e7a0-40e8-ba38-3065f43957a3",pictureDataToBeUsedForDetection).subscribe(response => {console.log(response)});
    }


    train() {

      this.trainService.trainGroup().subscribe(response => {console.log(response)});

    }

}
