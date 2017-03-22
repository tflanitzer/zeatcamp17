import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { IntroducedPerson } from 'app/introduced-person'
import { Http } from "@angular/http";

import 'rxjs/add/operator/map'

@Injectable()
export class LuisClientService {
  readonly introductionApiEndpoint = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a74a06b1-0340-4c8e-8e35-38bd629d627a?subscription-key=b3d00b46afdb437f861f3690e1752d72&verbose=false&q=';

  constructor(private http: Http) { }

  analyzeIntroduction(introductionText: string): Observable<IntroducedPerson> {
    var requestUrl = this.introductionApiEndpoint + encodeURIComponent(introductionText);
    
    return this.http.get(requestUrl)
      .map(response => response.json())
      .map(json => {
        if (!json.topScoringIntent) {
          return null;
        }

        if (json.topScoringIntent.intent != 'Introduction') {
          return null;
        }

        let entities = json.entities;
        let nameEntity = entities.find(entity => entity.type == 'name');
        let originEntity = entities.find(entity => entity.type == 'origin');
        let ageEntity = entities.find(entity => entity.type == 'builtin.age');

        return new IntroducedPerson((nameEntity||{}).entity, (originEntity||{}).entity, (ageEntity||{}).entity)
      })
  }
}
