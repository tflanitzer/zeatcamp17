import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { TranslatorService } from "app/translator.service";

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
