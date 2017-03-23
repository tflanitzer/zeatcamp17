import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map'

@Injectable()
export class QnaService {
  readonly qnaEndpoint = "https://westus.api.cognitive.microsoft.com/qnamaker/v1.0/knowledgebases/9355133d-2033-482b-ae82-1cded07437da/generateAnswer"
  readonly qnaSubscriptionKey = 'c000f3ca208041b18fd134f375437e98';

  constructor(private http: Http) { 
  }

  generateAnswer(question: string): Observable<string> {
    let body = {
      question: question
    };

    let headers = new Headers({
      'Ocp-Apim-Subscription-Key': this.qnaSubscriptionKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.qnaEndpoint, body, options)
      .map(response => response.json())
      .map(json => {
        return json.answer;
      });
  }
}