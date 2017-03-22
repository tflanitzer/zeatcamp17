import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/concatMap'

@Injectable()
export class TranslatorService {
  authorizationEndpoint = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
  translationEndpoint = 
    'https://api.microsofttranslator.com/v2/http.svc/Translate';
    //'https://api.cognitive.microsoft.com/sts/v1.0/Translate';

  constructor(private http: Http) { }

  translateText (sourceText: string): Observable<string> {

    return this.getAccessToken()
      .concatMap(token => this.performTranslation(sourceText, token));
  }

  performTranslation(sourceText: string, token: string) : Observable<string> {
      let authorizationHeader = 'Bearer ' + token;
      let url = this.translationEndpoint + '?text=' + encodeURI(sourceText) + '&from=de&to=en&appid=' + authorizationHeader;     
      let requestHeaders = new Headers({
        'Accept': 'application/json'
      });
      let options = new RequestOptions( { headers: requestHeaders});

      return this.http.get(url, options) 
        .map(response => {
          let parser = new DOMParser();
          let xml = parser.parseFromString(response.text(), 'text/xml');
          return xml.documentElement.textContent;
        });
  }

  getAccessToken() : Observable<string> {
    let url = this.authorizationEndpoint + '?Subscription-Key=4a07aee390cd472a9bf501d1db6a71d2';

    return this.http.post(url, '')
      .map(response => response.text());
  }
}
