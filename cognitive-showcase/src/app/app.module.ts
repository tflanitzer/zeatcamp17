import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { NavigationComponent } from './navigation/navigation.component';
import { TranslationModule } from "app/translation/translation.module";
import { LanguageUnderstandingModule } from "app/language-understanding/language-understanding.module";
import { TextAnalysisModule } from "app/text-analysis/text-analysis.module";
import { FaceRecognitionModule } from "app/face-recognition/face-recognition.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslationModule,
    LanguageUnderstandingModule,
    TextAnalysisModule,
    FaceRecognitionModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
