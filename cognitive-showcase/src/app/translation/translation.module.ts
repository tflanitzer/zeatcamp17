import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationRoutingModule } from "app/translation/translation-routing.module";
import { TranslatorComponent } from "app/translation/translator/translator.component";
import { FormsModule } from "@angular/forms";
import { TranslatorService } from "app/translation/translator.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
