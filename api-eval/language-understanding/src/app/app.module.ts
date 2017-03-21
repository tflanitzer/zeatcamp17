import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { IntroducerComponent } from './introducer/introducer.component';
import { IntroductionFormComponent } from './introduction-form/introduction-form.component';
import { IntroductionGreetingComponent } from './introduction-greeting/introduction-greeting.component';
import { LuisClientService } from "app/luis-client.service";
import { ListenerService } from "app/listener.service";
import { SpeakerService } from "app/speaker.service";

@NgModule({
  declarations: [
    AppComponent,
    IntroducerComponent,
    IntroductionFormComponent,
    IntroductionGreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    LuisClientService,
    ListenerService,
    SpeakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
