import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/concatMap'
import { StsTokenService } from "app/shared/sts-token.service";

@Injectable()
export class SpeakerService {
  readonly synthesizeEndpoint = 'https://speech.platform.bing.com/synthesize';
  readonly voiceIdentifier = "Microsoft Server Speech Text to Speech Voice (de-DE, Hedda)";
  readonly bingSpeechSubscriptionKey = 'd6401364572d44d48bdc8b7b37241517'; // Bing speech

  readonly audioContext = new AudioContext();

  constructor(private http: Http, private tokenService: StsTokenService) { 
  }

  speak(text: string) {
    this.synthesize(text).subscribe(audioData => this.renderAudio(audioData));
  }

  private synthesize(text: string): Observable<ArrayBuffer> {
    return this.tokenService.getAuthorizationHeader(this.bingSpeechSubscriptionKey).concatMap(authorizationHeader => {
      // let urlParams = new URLSearchParams();
      // urlParams.append('VoiceType', 'Female');
      // urlParams.append('Locale', 'de-DE');
      // urlParams.append('Text', text);

      let url = this.synthesizeEndpoint;
      let body = "<speak version='1.0' xml:lang='de-DE'><voice xml:lang='de-DE' xml:gender='Male' name='Microsoft Server Speech Text to Speech Voice (de-DE, Stefan, Apollo)'>" + text + "</voice></speak>";
      
      let headers = new Headers({
        'Authorization': authorizationHeader,
        'Content-Type': 'application/ssml+xml',
        'X-MICROSOFT-OutputFormat': 'riff-16khz-16bit-mono-pcm'
      });
      let options = new RequestOptions({ responseType: ResponseContentType.ArrayBuffer, headers: headers });

      return this.http.post(url, body, options)
        .map(response => {
          return response.arrayBuffer();
        });
    });
  }

  private renderAudio(audioData: ArrayBuffer) {
    this.audioContext.decodeAudioData(audioData, buffer => {
      let bufferSource = this.audioContext.createBufferSource();
      bufferSource.buffer = buffer;

      bufferSource.connect(this.audioContext.destination);
      bufferSource.start(0);
    });
  }
}
