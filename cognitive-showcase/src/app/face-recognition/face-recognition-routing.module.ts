import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducerComponent } from "app/language-understanding/introducer/introducer.component";

const appRoutes: Routes = [
  { path: 'language-understanding', component: IntroducerComponent },
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