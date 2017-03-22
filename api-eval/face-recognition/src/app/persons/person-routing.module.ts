import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent }    from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonAddComponent } from "app/persons/person-add.component";
import { PersonTrainComponent } from "app/persons/person-train.component";
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