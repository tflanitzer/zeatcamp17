import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';

const appRoutes: Routes = [
  { path: 'text-analysis', component: TextAnalyzerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [TextAnalyzerComponent]
})
export class TextAnalysisModule { }
