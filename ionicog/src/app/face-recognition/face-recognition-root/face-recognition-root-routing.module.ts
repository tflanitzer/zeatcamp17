import { NgModule }              from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { IntroducerComponent } from "../language-understanding/introducer/introducer.component";
import { FaceRecognitionRootComponent } from "./face-recognition-root.component";
import { PersonListComponent } from "../persons/person-list.component";
import { PersonDetailComponent } from "../persons/person-detail.component";
import { PersonAddComponent } from "../persons/person-add.component";
import { PersonTrainComponent } from "../persons/person-train.component";
import { IdentifyPersonComponent } from "../identify-person/identify-person.component";

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