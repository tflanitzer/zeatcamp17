import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceRecognitionRoutingModule } from "app/face-recognition/face-recognition-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { PersonsModule } from "app/face-recognition/persons/persons.module";
import { IdentifyPersonComponent } from "app/face-recognition/identify-person/identify-person.component";
import { Routes, RouterModule, Router } from "@angular/router";
import { FaceRecognitionRootModule } from "app/face-recognition/face-recognition-root/face-recognition-root.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FaceRecognitionRootModule,
    FaceRecognitionRoutingModule,
  ],
  declarations: [
  ]
})
export class FaceRecognitionModule { }
