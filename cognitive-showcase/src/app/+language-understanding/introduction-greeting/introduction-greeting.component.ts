import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { IntroducedPerson } from "app/+language-understanding/introduced-person";
import { SpeakerService } from "app/+shared/speaker.service";

@Component({
  selector: 'app-introduction-greeting',
  templateUrl: './introduction-greeting.component.html',
  styleUrls: ['./introduction-greeting.component.css']
})
export class IntroductionGreetingComponent implements OnInit, OnChanges {
  @Input() person: IntroducedPerson;

  constructor(private speaker: SpeakerService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this.person) {
      setTimeout(() => this.speakIntroduction(), 1000);
    }
  }

  private speakIntroduction() {
    let text = '';

    if (this.person.name) {
      text = text + 'Hallo ' + this.person.name;
    }

    if (this.person.age) {
      if (this.person.age > 30) {        
        text = text + ' du alter Sack.';
      } else {
        text = text + ' du Jungspund.';
      }
    } else {
      text = text + '.';
    }
    
    if (this.person.origin) {
      text = text + ' In ' + this.person.origin + ' wohnen die hellsten Köpfe.'
    }
    
    this.speaker.speak(text);
  }
}
