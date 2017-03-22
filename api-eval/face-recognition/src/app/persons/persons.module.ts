import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PersonListComponent }    from './person-list.component';
import { PersonDetailComponent }  from './person-detail.component';

import { PersonRoutingModule} from './person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
    
  ],
  declarations: [
    PersonDetailComponent,
    PersonListComponent

  ]
})
export class PersonsModule { }
