import { NgModule }              from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { IntroducerComponent } from "../language-understanding/introducer/introducer.component";
import { FaceRecognitionRootComponent } from "../face-recognition/face-recognition-root/face-recognition-root.component";
import { IdentifyPersonComponent } from "../face-recognition/identify-person/identify-person.component";
import { PersonListComponent } from "../face-recognition/persons/person-list.component";
import { PersonDetailComponent } from "../face-recognition/persons/person-detail.component";
import { PersonAddComponent } from "../face-recognition/persons/person-add.component";
import { PersonTrainComponent } from "../face-recognition/persons/person-train.component";

const appRoutes: Routes = [

 {
    path: 'face-recognition',
    component: FaceRecognitionRootComponent,
    children: [
      {path: 'persons', component: PersonListComponent },
      { path: 'person/:id', component: PersonDetailComponent },
      { path: 'addperson', component: PersonAddComponent },
      { path: 'train/:id', component: PersonTrainComponent},
      { path: 'detection', component: IdentifyPersonComponent},
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