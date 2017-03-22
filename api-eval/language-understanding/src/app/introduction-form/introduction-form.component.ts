import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ListenerService } from "app/listener.service";

import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-introduction-form',
  templateUrl: './introduction-form.component.html',
  styleUrls: ['./introduction-form.component.css']
})
export class IntroductionFormComponent implements OnInit, OnDestroy {
  @Output() submit = new EventEmitter<string>();
  
  private keyUpSubject = new Subject<string>();
  private introductionText: string;
  private isListening: boolean;

  constructor(private listener: ListenerService) { }

  ngOnInit() {
    this.keyUpSubject
      .debounceTime(1000)
      .subscribe(() => this.submitIntroduction());
  }

  ngOnDestroy() {
    this.listener.stopListening();
  }

  toggleListening() {
    if (this.isListening) {
      this.listener.stopListening();
    } else {
      this.listener.startListening().subscribe(transcript => {
        this.introductionText = transcript;
        this.submitIntroduction();
      });
    }

    this.isListening = !this.isListening;
  }

  submitIntroduction() {
    this.submit.emit(this.introductionText);
  }
}
