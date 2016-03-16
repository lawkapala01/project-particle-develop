import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "emitter-property-panel",
  template: `<div class="card">
  <header class="card-header">
    <h3>{{localeData.SE_head}}</h3>
  </header>

  <div class="card-block">
    <input-range
            class="input-range"
            label="{{localeData.SE_startXVariance}}"
            min="0" max="1024" step="1"
            [drawingData]="drawingData"
            targetProperty="startXVariance">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SE_startYVariance}}"
            min="0" max="1024" step="1"
            [drawingData]="drawingData"
            targetProperty="startYVariance">
    </input-range>

    <hr>

    <input-range
            class="input-range"
            label="{{localeData.SE_initialSpeed}}"
            min="0" max="40" step="0.1"
            [drawingData]="drawingData"
            targetProperty="initialSpeed">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SE_initialSpeedVariance}}"
            min="0" max="20" step="0.1"
            [drawingData]="drawingData"
            targetProperty="initialSpeedVariance">
    </input-range>

    <hr>

    <input-range
            class="input-range"
            label="{{localeData.SE_initialDirection}}"
            min="0" max="360" step="0.5"
            [drawingData]="drawingData"
            targetProperty="initialDirection">
    </input-range>

    <input-range
            label="{{localeData.SE_initialDirectionVariance}}"
            min="0" max="360" step="0.5"
            [drawingData]="drawingData"
            targetProperty="initialDirectionVariance">
    </input-range>

    <hr>

    <input-range
            class="input-range"
            label="{{localeData.SE_friction}}"
            min="0" max="0.15" step="0.0005"
            [drawingData]="drawingData"
            targetProperty="friction">
    </input-range>

    <hr>

    <input-range
            class="input-range"
            label="{{localeData.SE_accelerationSpeed}}"
            min="0" max="4" step="0.0005"
            [drawingData]="drawingData"
            targetProperty="accelerationSpeed">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SE_accelerationDirection}}"
            min="0" max="360" step="0.1"
            [drawingData]="drawingData"
            targetProperty="accelerationDirection">
    </input-range>

    <hr/>

    <input-range
            class="input-range"
            label="{{localeData.SE_emitFrequency}}"
            min="1" max="300" step="1"
            [drawingData]="drawingData"
            targetProperty="emitFrequency">
    </input-range>
  </div>
</div>
`,
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyEmitterPanel {
  private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
