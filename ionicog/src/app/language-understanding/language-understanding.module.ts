import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LanguageUnderstandingRoutingModule } from "../language-understanding/language-understanding-routing.module";
import { IntroducerComponent } from "../language-understanding/introducer/introducer.component";
import { IntroductionFormComponent } from "../language-understanding/introduction-form/introduction-form.component";
import { IntroductionGreetingComponent } from "../language-understanding/introduction-greeting/introduction-greeting.component";
import { HttpModule } from "@angular/http";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    LanguageUnderstandingRoutingModule
  ],
  declarations: [
    IntroducerComponent,
    IntroductionFormComponent,
    IntroductionGreetingComponent
  ],
  providers: []
})
export class LanguageUnderstandingModule { }
