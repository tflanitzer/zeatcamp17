import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ListenerService } from "../../shared/listener.service";

import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-introduction-form',
  templateUrl: './introduction-form.component.html'
})
export class IntroductionFormComponent implements OnInit {
  @Output() entered = new EventEmitter<string>();

  constructor(private listener: ListenerService) { }

  ngOnInit() {
  }

  submit(value: string) {
    this.entered.emit(value);
  }
}
