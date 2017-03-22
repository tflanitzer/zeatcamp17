import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonTrainComponent } from "app/face-recognition/persons/person-train.component";
import { PersonAddComponent } from "app/face-recognition/persons/person-add.component";
import { PersonListComponent } from "app/face-recognition/persons/person-list.component";
import { PersonDetailComponent } from "app/face-recognition/persons/person-detail.component";

const personRoutes: Routes = [
  { path: 'persons',  component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'addperson', component: PersonAddComponent },
  { path: 'train/:id', component: PersonTrainComponent }
  
];
@NgModule({
  imports: [
    RouterModule.forChild(personRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonRoutingModule { }