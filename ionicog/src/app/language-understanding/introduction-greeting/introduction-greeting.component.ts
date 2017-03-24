import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { IntroducedPerson } from "../language-understanding/introduced-person";
import { SpeakerService } from "../shared/speaker.service";

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
      text = text + `Hallo ${this.person.name}! `;
    }

    if (this.person.age) {
      text = text + `Bist du wirklich schon ${this.person.age} Jahre alt? `;
    }

    if (this.person.origin) {
      text = text + `Ist ${this.person.origin} eine Reise wert?`;
    }

    if (text === '') {
      return;
    }
    
    this.speaker.speak(text);
  }
}
