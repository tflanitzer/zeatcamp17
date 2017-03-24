import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

declare var Bing: any;
declare var Microsoft: any;

@Injectable()
export class ListenerService {
  private micClient: any;
  private listeningSubject: Subject<string>;

  readonly defaultLanguage = "de-de";

  constructor() {
    this.listeningSubject = new Subject<string>();

    let speech = Microsoft.CognitiveServices.SpeechRecognition;

    this.micClient = speech.SpeechRecognitionServiceFactory.createMicrophoneClient(
      speech.SpeechRecognitionMode.shortDictation,
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

  startListening(language?: string): Observable<string> {
    language = language || this.defaultLanguage;
    this.micClient._prefs.locale = language;
    
    this.micClient.startMicAndRecognition();

    return this.listeningSubject;
  }

  stopListening() {
    this.micClient.endMicAndRecognition();    
  }
}
