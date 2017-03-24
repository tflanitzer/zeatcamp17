import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorComponent } from "./translator/translator.component";


const appRoutes: Routes = [
  { path: 'translation', component: TranslatorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TranslationRoutingModule {}