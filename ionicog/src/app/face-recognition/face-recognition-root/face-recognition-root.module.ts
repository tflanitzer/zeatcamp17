import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { IdentifyPersonComponent } from "../face-recognition/identify-person/identify-person.component";
import { ListPersonsService } from "../face-recognition/list-persons.service";
import { DefinePersonService } from "../face-recognition/define-person.service";
import { DetectFaceService } from "../face-recognition/detect-face.service";
import { AddPersonFaceService } from "../face-recognition/add-person-face.service";
import { TrainService } from "../face-recognition/train.service";
import { IdentifyService } from "../face-recognition/identify.service";
import { FetchPersonService } from "../face-recognition/fetch-person.service";
import { FaceRecognitionRootComponent } from "../face-recognition/face-recognition-root/face-recognition-root.component";
import { FaceRecognitionRootRoutingModule } from "../face-recognition/face-recognition-root/face-recognition-root-routing.module";
import { WebcamComponent } from "../face-recognition/webcam/webcam.component";
import { PersonsModule } from "../face-recognition/persons/persons.module";
import { PersonDetailComponent } from "../face-recognition/persons/person-detail.component";
import { PersonListComponent } from "../face-recognition/persons/person-list.component";
import { PersonAddComponent } from "../face-recognition/persons/person-add.component";
import { PersonTrainComponent } from "../face-recognition/persons/person-train.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DeletePersonService } from "../face-recognition/delete-person.service";

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
