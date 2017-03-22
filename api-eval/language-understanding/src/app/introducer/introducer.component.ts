import { Component, OnInit } from '@angular/core';
import { LuisClientService } from "app/luis-client.service";
import { IntroducedPerson } from "app/introduced-person";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

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
