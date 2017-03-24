import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducerComponent } from "../language-understanding/introducer/introducer.component";
import { FaceRecognitionRootComponent } from "../face-recognition/face-recognition-root/face-recognition-root.component";

const appRoutes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceRecognitionRoutingModule {}