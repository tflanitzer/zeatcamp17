import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationRoutingModule } from "app/+translation/translation-routing.module";
import { TranslatorComponent } from "app/+translation/translator/translator.component";
import { FormsModule } from "@angular/forms";
import { TranslatorService } from "app/+translation/translator.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslationRoutingModule
  ],
  declarations: [
    TranslatorComponent
  ],
  providers: [
    TranslatorService
  ]
})
export class TranslationModule { }
