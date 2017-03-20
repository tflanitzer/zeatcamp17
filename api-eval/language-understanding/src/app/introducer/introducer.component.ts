import { Component, OnInit } from '@angular/core';
import { LuisClientService } from "app/luis-client.service";
import { IntroducedPerson } from "app/introduced-person";

@Component({
  selector: 'app-introducer',
  templateUrl: './introducer.component.html',
  styleUrls: ['./introducer.component.css']
})
export class IntroducerComponent implements OnInit {
  introducedPerson: IntroducedPerson;

  constructor(private luisClient: LuisClientService) { }

  ngOnInit() {
  }

  analyzeIntroduction(introductionText: string) {
    this.luisClient.analyzeIntroduction(introductionText).subscribe(introducedPerson => this.introducedPerson = introducedPerson);
  }
}
