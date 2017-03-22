import { Component, OnInit, OnDestroy} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Person } from "app/face-recognition/person";
import { AddPersonFaceService } from "app/face-recognition/add-person-face.service";
import { TrainService } from "app/face-recognition/train.service";
import { WebcamStorageService } from "app/shared/webcam-storage.service";
import { FetchPersonService } from "app/face-recognition/fetch-person.service";



@Component({
  template: `
  <div *ngIf="person" class="container">
      <div class="progress">
          <input class="form-control form-control-lg" [(ngModel)]="sizeOfSample">
      </div>

  </div>
  `
})
export class PersonTrainComponent implements OnInit {
    
    private person: Person;
    private sizeOfSample: number = 1;
    private percentDone = 0;

    private sub: Subscription;

    constructor(
          private addPersonFaceService:AddPersonFaceService, 
          private trainService:TrainService,
          private localService:WebcamStorageService,
          private route: ActivatedRoute,
          private router: Router,
          private service: FetchPersonService
    ) {
    }

    ngOnInit() {
       this.route.params
          .switchMap((params: Params) => this.service.getPerson(params['id']))
          .subscribe((person: Person) => this.person = person);
        
        let timer = Observable.timer(8000,7000);
        this.sub = timer.subscribe(t =>
          {if (this.sizeOfSample > 9) {
            this.train();
          } else {
            this.addFace()
          }}
        );
    }

    

    addFace() {
      // 1. retrieve data from shared service 
      let  pictureDataToBeUsedForDetection = this.localService.getLatestScreenShot();
      
      // 2. add person-face to person training setTimeout
      this.addPersonFaceService
              .addFaceToPerson(this.person.personId ,pictureDataToBeUsedForDetection)
              .subscribe(response => {
                  if (response.status == 200) {
                    this.sizeOfSample++;
                    this.percentDone = 100 * (this.sizeOfSample / 10);
                  }
              });
    }


    train() {

      this.trainService.trainGroup().subscribe(response => {console.log(response)});
      
      //TODO: check if result was ok 
      this.router.navigate(['/persons']);

    }

     ngOnDestroy(){
        this.sub.unsubscribe();

    }


}
