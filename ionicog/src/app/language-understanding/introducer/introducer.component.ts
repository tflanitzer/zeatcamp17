import { Component, OnInit } from '@angular/core';
import { IntroducedPerson } from "../language-understanding/introduced-person";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { LuisClientService } from "../../shared/luis-client.service";

@Component({
  selector: 'app-introducer',
  templateUrl: './introducer.component.html',
  styleUrls: ['./introducer.component.css']
})
export class IntroducerComponent implements OnInit {
  introducedPerson: IntroducedPerson;
  noResult: boolean;

  constructor(private luisClient: LuisClientService, private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
  }

  analyzeIntroduction(introductionText: string) {
    if (!introductionText){
      this.introducedPerson = undefined;
      return;
    }

    this.slimLoadingBarService.reset();
    this.slimLoadingBarService.start();
    
    this.luisClient.analyzeIntroduction(introductionText).subscribe(introducedPerson => 
    {
      this.introducedPerson = introducedPerson;
      this.noResult = introducedPerson === null;
      this.slimLoadingBarService.complete();
    });
  }
}
