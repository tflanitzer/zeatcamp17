import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-introduction-form',
  templateUrl: './introduction-form.component.html',
  styleUrls: ['./introduction-form.component.css']
})
export class IntroductionFormComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();

  introductionText: string;

  constructor() { }

  ngOnInit() {
  }

  submitIntroduction() {
    this.submit.emit(this.introductionText);
  }
}
