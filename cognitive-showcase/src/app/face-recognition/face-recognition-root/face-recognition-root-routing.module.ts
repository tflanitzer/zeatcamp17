import { NgModule }              from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { IntroducerComponent } from "app/language-understanding/introducer/introducer.component";
import { FaceRecognitionRootComponent } from "app/face-recognition/face-recognition-root/face-recognition-root.component";
import { IdentifyPersonComponent } from "app/face-recognition/identify-person/identify-person.component";
import { PersonListComponent } from "app/face-recognition/persons/person-list.component";
import { PersonDetailComponent } from "app/face-recognition/persons/person-detail.component";
import { PersonAddComponent } from "app/face-recognition/persons/person-add.component";
import { PersonTrainComponent } from "app/face-recognition/persons/person-train.component";

const appRoutes: Routes = [

 {
    path: 'face-recognition',
    component: FaceRecognitionRootComponent,
    children: [
      {path: 'persons', component: PersonListComponent },
      { path: 'person/:id', component: PersonDetailComponent },
      { path: 'addperson', component: PersonAddComponent },
      { path: 'train/:id', component: PersonTrainComponent}
    ]
 }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceRecognitionRootRoutingModule {}