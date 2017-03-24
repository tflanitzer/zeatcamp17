import { Component, OnInit, Input } from '@angular/core';
import { TextAnalysis } from "../../shared/text-analysis";

@Component({
  selector: 'app-analysis-presenter',
  templateUrl: './analysis-presenter.component.html'
})
export class AnalysisPresenterComponent implements OnInit {
  @Input() analysis: TextAnalysis;

  constructor() { }

  ngOnInit() {
  }

}
