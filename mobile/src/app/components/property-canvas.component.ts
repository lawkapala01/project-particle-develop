import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "canvas-property-panel",
  template: `<div class="card">
  <header class="card-header">
    <h3>{{localeData.SF_head}}</h3>
  </header>
  <div class="card-block">
    <input-range
            class="input-range"
            label="{{localeData.SF_stageW}}"
            min="0" max="1024" step="1"
            [drawingData]="drawingData"
            targetProperty="width">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SF_stageH}}"
            min="0" max="1024" step="1"
            [drawingData]="drawingData"
            targetProperty="height">
    </input-range>
  </div>
</div>
<hr>
<div class="card">
  <header class="card-header">
    <h3>{{localeData.SF_bgColor}}</h3>
  </header>
  <div class="card-block">
    <input type="color"
           [(ngModel)]="drawingData.bgColor"
           placeholder="bgColor"
           value="{{drawingData.bgColor}}"/>
    {{drawingData.bgColor}}
  </div>
</div>
`,
  inputs: ["drawingData"],
  directives: [InputRangeComponent]
})

export class PropertyCanvasPanel {
  private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
