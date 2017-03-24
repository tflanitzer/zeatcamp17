import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/concatMap'

class IssuedToken {
  constructor(public token: string, public issuedAt: Date) {}
}

@Injectable()
export class StsTokenService {
  readonly authorizationEndpoint = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
  // // readonly subscriptionKey = '4a07aee390cd472a9bf501d1db6a71d2'; // Translation API
  // readonly subscriptionKey = 'd6401364572d44d48bdc8b7b37241517'; // Bing speech

  private currentTokens = new Map<string, IssuedToken>();

  constructor(private http: Http) { }

  getAuthorizationHeader(subscriptionKey: string): Observable<string> {
    if (this.currentTokens[subscriptionKey] && ((Date.now() - this.currentTokens[subscriptionKey].issuedAt.valueOf()) < 60 * 9 * 1000)) {
      return Observable.of(this.getHeaderStringForToken(this.currentTokens[subscriptionKey].token));
    }

    return this.getAccessToken(subscriptionKey)
      .map(token => {
        this.currentTokens[subscriptionKey] = new IssuedToken(token, new Date());

        return this.getHeaderStringForToken(token);
      });
  }

  private getHeaderStringForToken(token: string) {
    return 'Bearer ' + token;
  }

  private getAccessToken(subscriptionKey: string): Observable<string> {
    let url = this.authorizationEndpoint;

    let options = new RequestOptions({headers: new Headers({'Ocp-Apim-Subscription-Key': subscriptionKey})});

    return this.http.post(url, '', options)
      .map(response => response.text());
  }
}
