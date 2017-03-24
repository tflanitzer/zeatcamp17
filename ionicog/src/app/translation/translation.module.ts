import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { TranslationRoutingModule } from "./translation-routing.module";
import { TranslatorComponent } from "./translator/translator.component";
import { TranslatorService } from "./translator.service";

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
