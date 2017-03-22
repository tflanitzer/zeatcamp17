import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceRecognitionRoutingModule } from "app/face-recognition/face-recognition-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FaceRecognitionRoutingModule,
    SharedModule
  ],
  declarations: [WrapperComponent]
})
export class FaceRecognitionModule { }
