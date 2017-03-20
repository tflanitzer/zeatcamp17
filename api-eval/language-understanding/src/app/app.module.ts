import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroducerComponent } from './introducer/introducer.component';
import { IntroductionFormComponent } from './introduction-form/introduction-form.component';
import { IntroductionGreetingComponent } from './introduction-greeting/introduction-greeting.component';
import { LuisClientService } from "app/luis-client.service";

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
    HttpModule
  ],
  providers: [LuisClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
