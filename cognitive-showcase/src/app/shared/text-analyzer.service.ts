import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map'

import { TextAnalysis, DetectedLanguage } from "./text-analysis" 

@Injectable()
export class TextAnalyzerService {
  readonly sentimentEndpoint = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment"
  readonly keyPhrasesEndpoint = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases"
  readonly languagesEndpoint = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages"
  readonly textAnalyticsSubscriptionKey = 'dbfb68bb07864edd83c3f6764317c5c5';

  constructor(private http: Http) { 
  }

  analyze(text: string): Observable<TextAnalysis> {
    let sentiment = this.performAnalyticsRequest(text, this.sentimentEndpoint);
    let keyPhrases = this.performAnalyticsRequest(text, this.keyPhrasesEndpoint);
    let languages = this.performAnalyticsRequest(text, this.languagesEndpoint);

    return Observable.forkJoin([sentiment, keyPhrases, languages])
      .map(results => {
        let analysis = new TextAnalysis();

        analysis.sentiment = results[0].documents[0].score;
        analysis.keyPhrases = results[1].documents[0].keyPhrases;
        analysis.detectedLanguages = results[2].documents[0].detectedLanguages.map(detected => new DetectedLanguage(detected.name, detected.score));

        return analysis;
      });
  }

  performAnalyticsRequest(text: string, endpoint: string): Observable<any> {
    let body = {
      documents: [
        {
          id: 1,
          text: text
        }
      ]
    };

    let headers = new Headers({
      'Ocp-Apim-Subscription-Key': this.textAnalyticsSubscriptionKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(endpoint, body, options)
      .map(response => response.json());
  }
}
