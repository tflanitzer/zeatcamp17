import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PersonAddComponent } from "app/face-recognition/persons/person-add.component";
import { PersonTrainComponent } from "app/face-recognition/persons/person-train.component";
import { PersonDetailComponent } from "app/face-recognition/persons/person-detail.component";
import { PersonListComponent } from "app/face-recognition/persons/person-list.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PersonDetailComponent,
    PersonListComponent,
    PersonAddComponent,
    PersonTrainComponent
  ] 
})
export class PersonsModule { }
