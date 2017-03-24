import { Component, OnInit } from '@angular/core';
import { TextAnalyzerService } from "../shared/text-analyzer.service";
import { TextAnalysis } from "../shared/text-analysis";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent implements OnInit {
  private analysis: TextAnalysis;

  constructor(private textanalyzer: TextAnalyzerService, private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
  }

  submit(text: string) {
    if (!text) {
      this.analysis = undefined;
      return;
    }

    this.slimLoadingBarService.reset();
    this.slimLoadingBarService.start()

    this.textanalyzer.analyze(text).subscribe(analysis => {
      this.analysis = analysis;

      this.slimLoadingBarService.complete();
    });
  }
}
