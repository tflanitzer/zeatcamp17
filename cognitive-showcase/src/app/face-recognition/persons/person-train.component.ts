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
      <div >
          
          <button type="button" (click)="toggle()" class="btn {{button}}">Samples <span class="badge">{{ sizeOfSample }}/10</span></button>
      </div>

  </div>
  `
})
export class PersonTrainComponent implements OnInit {
    
    private timer: Observable<number>;
    private person: Person;
    private sizeOfSample: number = 0;
    private percentDone = 0;
    private button:string = "btn-danger";


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

    toggle() {
      if (this.sub == null) {
          this.button = "btn-success";
          this.sub = this.timer.subscribe(t =>
                        {if (this.sizeOfSample > 9) {
                            this.train();
                        } else {
                            this.addFace()
                        }}
                      );
      } else {
        this.sub.unsubscribe(); 
        this.sub = null;
        this.button = "btn-danger";
      }
    }

    ngOnInit() {
       this.route.params
          .switchMap((params: Params) => this.service.getPerson(params['id']))
          .subscribe((person: Person) => this.person = person);
        
        this.timer = Observable.timer(8000,7000);
       
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
      this.router.navigate(['face-recognition/persons']);

    }

     ngOnDestroy(){
        this.sub.unsubscribe(); 
    }


}
