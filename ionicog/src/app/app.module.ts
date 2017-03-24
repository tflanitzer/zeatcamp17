import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRoutingModule } from "./app-routing.module";
import { TranslationModule } from "./translation/translation.module";
import { LanguageUnderstandingModule } from "./language-understanding/language-understanding.module";
import { TextAnalysisModule } from "./text-analysis/text-analysis.module";
import { FaceRecognitionModule } from "./face-recognition/face-recognition.module";
import { QnaModule } from "./qna/qna.module";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NavigationComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AppRoutingModule,
    TranslationModule,
    LanguageUnderstandingModule,
    TextAnalysisModule,
    FaceRecognitionModule,
    QnaModule,
    SlimLoadingBarModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
