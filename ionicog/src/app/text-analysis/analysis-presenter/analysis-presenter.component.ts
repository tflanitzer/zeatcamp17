import { Component, OnInit, Input } from '@angular/core';
import { TextAnalysis } from "../shared/text-analysis";

@Component({
  selector: 'app-analysis-presenter',
  templateUrl: './analysis-presenter.component.html',
  styleUrls: ['./analysis-presenter.component.css']
})
export class AnalysisPresenterComponent implements OnInit {
  @Input() analysis: TextAnalysis;

  constructor() { }

  ngOnInit() {
  }

}
