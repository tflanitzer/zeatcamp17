import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonDetailComponent } from "./person-detail.component";
import { PersonListComponent } from "./person-list.component";
import { PersonAddComponent } from "./person-add.component";
import { PersonTrainComponent } from "./person-train.component";


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
