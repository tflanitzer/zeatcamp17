import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { LuisClientService } from "./luis-client.service";
import { ListenerService } from "./listener.service";
import { SpeakerService } from "./speaker.service";
import { StsTokenService } from "./sts-token.service";
import { ListeningInputComponent } from './listening-input/listening-input.component';
import { FormsModule } from "@angular/forms";
import { WebcamStorageService } from "./webcam-storage.service";
import { TextAnalyzerService } from "./text-analyzer.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [ListeningInputComponent],
  providers: [
    LuisClientService,
    ListenerService,
    SpeakerService,
    StsTokenService,
    WebcamStorageService,
    TextAnalyzerService
  ],
  exports: [
    SlimLoadingBarModule,
    ListeningInputComponent
  ]
})
export class SharedModule { }
