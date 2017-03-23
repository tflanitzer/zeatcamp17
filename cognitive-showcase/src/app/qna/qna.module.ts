import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { QnaComponent } from "app/qna/qna/qna.component";
import { AnswerPresenterComponent } from "app/qna/answer-presenter/answer-presenter.component";
import { QnaService } from "app/qna/qna.service";

const appRoutes: Routes = [
  { path: 'qna', component: QnaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [QnaComponent, AnswerPresenterComponent],
  providers: [QnaService]
})
export class QnaModule { }
