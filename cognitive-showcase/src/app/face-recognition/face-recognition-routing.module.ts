import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducerComponent } from "app/language-understanding/introducer/introducer.component";
import { WrapperComponent } from "app/face-recognition/wrapper/wrapper.component";

const appRoutes: Routes = [
  { path: 'face-recognition', component: WrapperComponent },
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