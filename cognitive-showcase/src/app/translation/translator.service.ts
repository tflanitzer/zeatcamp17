import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/concatMap'
import { StsTokenService } from "app/+shared/sts-token.service";

@Injectable()
export class TranslatorService {
  readonly translationEndpoint = 'https://api.microsofttranslator.com/v2/http.svc/Translate';
  readonly translationSubscriptionKey = '4a07aee390cd472a9bf501d1db6a71d2';

  constructor(private http: Http, private tokenService: StsTokenService) { }

  translateText (sourceText: string): Observable<string> {

    return this.tokenService.getAuthorizationHeader(this.translationSubscriptionKey)
      .concatMap(authorizationHeader => this.performTranslation(sourceText, authorizationHeader));
  }

  performTranslation(sourceText: string, authorizationHeader: string) : Observable<string> {
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
}
