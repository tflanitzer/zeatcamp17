import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { QnaComponent } from "../qna/qna/qna.component";
import { AnswerPresenterComponent } from "../qna/answer-presenter/answer-presenter.component";
import { QnaService } from "../qna/qna.service";

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
