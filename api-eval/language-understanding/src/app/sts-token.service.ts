import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/concatMap'

@Injectable()
export class StsTokenService {
  readonly authorizationEndpoint = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
  // readonly subscriptionKey = '4a07aee390cd472a9bf501d1db6a71d2'; // Translation API
  readonly subscriptionKey = 'd6401364572d44d48bdc8b7b37241517'; // Bing speech

  currentTokenIssuedAt: Date;
  currentToken: string;

  constructor(private http: Http) { }

  getAuthorizationHeader(): Observable<string> {
    if (this.currentToken && ((Date.now() - this.currentTokenIssuedAt.valueOf()) < 60 * 9 * 1000)) {
      return Observable.of(this.getHeaderStringForToken(this.currentToken));
    }

    return this.getAccessToken()
      .map(token => {
        this.currentToken = token;
        this.currentTokenIssuedAt = new Date();

        return this.getHeaderStringForToken(token);
      });
  }

  private getHeaderStringForToken(token: string) {
    return 'Bearer ' + token;
  }

  getAccessToken(): Observable<string> {
    let url = this.authorizationEndpoint;// + '?Subscription-Key=' + this.subscriptionKey;

    let options = new RequestOptions({headers: new Headers({'Ocp-Apim-Subscription-Key': this.subscriptionKey})});

    return this.http.post(url, '', options)
      .map(response => response.text());
  }
}
