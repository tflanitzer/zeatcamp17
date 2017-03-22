import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslatorComponent } from "app/+translation/translator/translator.component";

const appRoutes: Routes = [
  { path: 'translation', component: TranslatorComponent },
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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