import { Component, OnInit } from '@angular/core';
import { TranslatorService } from "../translator.service";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
})
export class TranslatorComponent implements OnInit {

  textToTranslate: string = 'Hallo wie geht es dir?';
  translatedText: string;

  constructor(private translatorService: TranslatorService) { }

  ngOnInit() {
  }

  performTranslation() {
    this.translatorService.translateText(this.textToTranslate).subscribe(
      resultingText => this.translatedText = resultingText
    );
  }
}
