import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [],
  exports: [SlimLoadingBarModule]
})
export class SharedModule { }
