import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducerComponent } from "app/language-understanding/introducer/introducer.component";
import { FaceRecognitionRootComponent } from "app/face-recognition/face-recognition-root/face-recognition-root.component";

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