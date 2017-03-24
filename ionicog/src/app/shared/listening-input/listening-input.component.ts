import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ListenerService } from "../../shared/listener.service";


@Component({
  selector: 'app-listening-input',
  template: 'shared/listening-input/listening-input.component.html',
  styles: ['shared/listening-input/listening-input.component.css']
})
export class ListeningInputComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() placeholder: string;
  @Input() language: string;
  
  @Input() value: string;
  @Output() valueChange  = new EventEmitter<string>();
  
  private inputSubject = new Subject<string>();
  private isListening: boolean;
  
  constructor(private listener: ListenerService) { }

  ngOnInit() {
    this.inputSubject
      .debounceTime(1000)
      .subscribe(() => this.valueChange.emit(this.value));
  }

  ngOnDestroy() {
    this.listener.stopListening();
  }

  toggleListening() {
    if (this.isListening) {
      this.listener.stopListening();
    } else {
      this.listener.startListening(this.language).subscribe(transcript => {
        this.value = transcript;
        this.inputSubject.next();
      });
    }

    this.isListening = !this.isListening;
  }
}
