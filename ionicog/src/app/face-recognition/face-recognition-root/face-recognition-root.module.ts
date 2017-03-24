import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PersonsModule } from "../persons/persons.module";
import { FaceRecognitionRootRoutingModule } from "./face-recognition-root-routing.module";
import { FaceRecognitionRootComponent } from "./face-recognition-root.component";
import { IdentifyPersonComponent } from "../identify-person/identify-person.component";
import { WebcamComponent } from "../webcam/webcam.component";
import { ListPersonsService } from "../list-persons.service";
import { DefinePersonService } from "../define-person.service";
import { DetectFaceService } from "../detect-face.service";
import { AddPersonFaceService } from "../add-person-face.service";
import { TrainService } from "../train.service";
import { IdentifyService } from "../identify.service";
import { FetchPersonService } from "../fetch-person.service";
import { DeletePersonService } from "../delete-person.service";

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
