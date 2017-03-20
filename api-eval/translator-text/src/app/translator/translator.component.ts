import { Component, OnInit } from '@angular/core';
import { TranslatorService } from "app/translator.service";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  textToTranslate: string = 'Hallo wie gehts?';
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
