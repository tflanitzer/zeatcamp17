import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { IdentifyPersonComponent } from "app/face-recognition/identify-person/identify-person.component";
import { ListPersonsService } from "app/face-recognition/list-persons.service";
import { DefinePersonService } from "app/face-recognition/define-person.service";
import { DetectFaceService } from "app/face-recognition/detect-face.service";
import { AddPersonFaceService } from "app/face-recognition/add-person-face.service";
import { TrainService } from "app/face-recognition/train.service";
import { IdentifyService } from "app/face-recognition/identify.service";
import { FetchPersonService } from "app/face-recognition/fetch-person.service";
import { FaceRecognitionRootComponent } from "app/face-recognition/face-recognition-root/face-recognition-root.component";
import { FaceRecognitionRootRoutingModule } from "app/face-recognition/face-recognition-root/face-recognition-root-routing.module";
import { WebcamComponent } from "app/face-recognition/webcam/webcam.component";
import { PersonsModule } from "app/face-recognition/persons/persons.module";
import { PersonDetailComponent } from "app/face-recognition/persons/person-detail.component";
import { PersonListComponent } from "app/face-recognition/persons/person-list.component";
import { PersonAddComponent } from "app/face-recognition/persons/person-add.component";
import { PersonTrainComponent } from "app/face-recognition/persons/person-train.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DeletePersonService } from "app/face-recognition/delete-person.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PersonsModule,
    FaceRecognitionRootRoutingModule,
  ],
  declarations: [
    FaceRecognitionRootComponent,
    IdentifyPersonComponent,
    WebcamComponent
  ],
  providers: [
    ListPersonsService,
    DefinePersonService,
    DetectFaceService,
    AddPersonFaceService,
    TrainService,
    IdentifyService,
    FetchPersonService,
    DeletePersonService
  ], exports: [
    FaceRecognitionRootComponent
  ]
})
export class FaceRecognitionRootModule {
 }
