import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { LuisClientService } from "app/+shared/luis-client.service";
import { ListenerService } from "app/+shared/listener.service";
import { SpeakerService } from "app/+shared/speaker.service";
import { StsTokenService } from "app/+shared/sts-token.service";

@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [],
  providers: [
    LuisClientService,
    ListenerService,
    SpeakerService,
    StsTokenService
  ],
  exports: [SlimLoadingBarModule]
})
export class SharedModule { }
