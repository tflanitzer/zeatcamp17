import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { LuisClientService } from "app/shared/luis-client.service";
import { ListenerService } from "app/shared/listener.service";
import { SpeakerService } from "app/shared/speaker.service";
import { StsTokenService } from "app/shared/sts-token.service";
import { ListeningInputComponent } from './listening-input/listening-input.component';
import { FormsModule } from "@angular/forms";

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
    StsTokenService
  ],
  exports: [
    SlimLoadingBarModule,
    ListeningInputComponent
  ]
})
export class SharedModule { }
