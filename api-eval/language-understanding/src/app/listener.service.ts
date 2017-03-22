import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import * as Speech from "lib/speech.1.0.0"

@Injectable()
export class ListenerService {
  //speech = require('lib/speech.1.0.0');
  private micClient: any;
  private listeningSubject: Subject<string>;

  constructor() {
    this.listeningSubject = new Subject<string>();    

    this.micClient = Speech.Microsoft.ProjectOxford.SpeechRecognitionServiceFactory.createMicrophoneClient(
      Speech.Microsoft.ProjectOxford.SpeechRecognitionMode.shortDictation,
      'de-de',
      'd6401364572d44d48bdc8b7b37241517');

    this.micClient.onPartialResponseReceived = transcript => { this.handleTranscript(transcript); };
    this.micClient.onFinalResponseReceived = transcript => { this.handleTranscript(transcript); };
  }

  private handleTranscript(transcript) {
    if (transcript.length == 0) {
      return;
    }

    this.listeningSubject.next(transcript[0].display);
  }

  startListening(): Observable<string> {
    this.micClient.startMicAndRecognition();

    return this.listeningSubject;
  }

  stopListening() {
    this.micClient.endMicAndRecognition();
  }
}
