import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';
import { AnalysisPresenterComponent } from './analysis-presenter/analysis-presenter.component';
import { SharedModule } from "app/shared/shared.module";

const appRoutes: Routes = [
  { path: 'text-analysis', component: TextAnalyzerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [TextAnalyzerComponent, AnalysisPresenterComponent]
})
export class TextAnalysisModule { }
