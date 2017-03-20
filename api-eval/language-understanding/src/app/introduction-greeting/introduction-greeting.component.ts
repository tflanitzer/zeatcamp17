import { Component, OnInit, Input } from '@angular/core';
import { IntroducedPerson } from "app/introduced-person";

@Component({
  selector: 'app-introduction-greeting',
  templateUrl: './introduction-greeting.component.html',
  styleUrls: ['./introduction-greeting.component.css']
})
export class IntroductionGreetingComponent implements OnInit {
  @Input() person: IntroducedPerson;

  constructor() { }

  ngOnInit() {
  }

}
