import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceRecognitionRoutingModule } from "../face-recognition/face-recognition-routing.module";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { FaceRecognitionRootModule } from "../face-recognition/face-recognition-root/face-recognition-root.module";
import { SharedModule } from "../shared/shared.module";

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
