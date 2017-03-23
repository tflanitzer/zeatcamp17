import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { QnaService } from "app/qna/qna.service";

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {
  private answer: string;

  constructor(private qnaService: QnaService, private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
  }

  submit(question: string) {
    if (!question) {
      this.answer = undefined;
      return;
    }

    this.slimLoadingBarService.reset();
    this.slimLoadingBarService.start()

    this.qnaService.generateAnswer(question).subscribe(answer => {
      this.answer = answer;

      this.slimLoadingBarService.complete();
    });
  }
}
