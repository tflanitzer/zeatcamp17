import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceRecognitionRoutingModule } from "app/face-recognition/face-recognition-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { WrapperComponent } from './wrapper/wrapper.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { WebcamComponent } from "app/face-recognition/webcam/webcam.component";
import { PersonsModule } from "app/face-recognition/persons/persons.module";
import { IdentifyPersonComponent } from "app/face-recognition/identify-person/identify-person.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    PersonsModule,
    FaceRecognitionRoutingModule
  ],
  declarations: [
    WrapperComponent,
    WebcamComponent,
    IdentifyPersonComponent,

  ]
})
export class FaceRecognitionModule { }
