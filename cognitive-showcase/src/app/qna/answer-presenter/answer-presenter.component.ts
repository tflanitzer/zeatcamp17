import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-presenter',
  templateUrl: './answer-presenter.component.html',
  styleUrls: ['./answer-presenter.component.css']
})
export class AnswerPresenterComponent implements OnInit {
  @Input() answer: string;

  constructor() { }

  ngOnInit() {
  }

}
