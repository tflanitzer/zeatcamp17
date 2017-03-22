import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PersonListComponent }    from './person-list.component';
import { PersonDetailComponent }  from './person-detail.component';

import { PersonRoutingModule } from './person-routing.module';
import { PersonAddComponent } from "app/persons/person-add.component";
import { PersonTrainComponent } from "app/persons/person-train.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
    
  ],
  declarations: [
    PersonDetailComponent,
    PersonListComponent,
    PersonAddComponent,
    PersonTrainComponent

  ]
})
export class PersonsModule { }
