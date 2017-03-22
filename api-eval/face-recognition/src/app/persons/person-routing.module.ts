import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent }    from './person-list.component';
import { PersonDetailComponent }  from './person-detail.component';
const personRoutes: Routes = [
  { path: 'persons',  component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailComponent }
  
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