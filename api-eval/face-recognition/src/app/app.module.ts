import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import { AddPersonComponent } from './add-person/add-person.component';

import { ListPersonsService } from "app/list-persons.service";
import { DefinePersonService } from "app/define-person.service";
import { TrainPersonComponent } from './train-person/train-person.component';
import { DetectFaceService} from 'app/detect-face.service';
import { AddPersonFaceService} from 'app/add-person-face.service';
import { TrainService} from "app/train.service";
import { IdentifyPersonComponent } from './identify-person/identify-person.component';
import { IdentifyService } from "app/identify.service";
import { FetchPersonService } from "app/fetch-person.service";
import { FaceRecognitionServiceService } from "app/face-recognition-service.service";

const appRoutes: Routes = [
  { path: 'persons', component: AddPersonComponent },
  { path: 'detection', component: IdentifyPersonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    AddPersonComponent,
    TrainPersonComponent,
    IdentifyPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ListPersonsService,
    DefinePersonService,
    DetectFaceService,
    AddPersonFaceService,
    TrainService,
    IdentifyService,
    FetchPersonService,
    FaceRecognitionServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
