import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { StsTokenService } from "app/sts-token.service";

import 'rxjs/add/operator/concatMap'

@Injectable()
export class SpeakerService {
  readonly synthesizeEndpoint = 'http://speech.platform.bing.com/synthesize';
  readonly voiceIdentifier = "Microsoft Server Speech Text to Speech Voice (de-DE, Hedda)";

  constructor(private http: Http, private tokenService: StsTokenService) {  }

  speak(text: string) {
    this.synthesize(text).subscribe(audioData => this.renderAudio(audioData));
  }

  private synthesize(text: string) : Observable<Blob> {
    return this.tokenService.getAuthorizationHeader().concatMap(authorizationHeader => {
        let headers = new Headers({          
          'Authorize': authorizationHeader,
          'Content-Type': 'application/ssml+xml',
          'X-MICROSOFT-OutputFormat': 'riff-16khz-16bit-mono-pcm'
        });
        let options = new RequestOptions({headers: headers});

        let parameters = {
          VoiceType: 'Female',
          Locale: 'de-DE',
          Text: text
        };

        let url = this.synthesizeEndpoint;

        for (let key in parameters) {
          if (url === this.synthesizeEndpoint) {
            url = url + '?';
          } else {
            url = url + '&';
          }

          url = url + key + '=' + parameters[key];
        }

        return this.http.post(url, undefined)
          .map(response => response.blob());
      });
  }

  private renderAudio(audioData: Blob) {

  }
}
