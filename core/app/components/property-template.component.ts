"use strict";

import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/data-shape";
import {ParticleParamater} from "../assets/particle-paramater";
import {OnInit} from "angular2/core";

@Component({
  selector: "particle-template-property-panel",
  templateUrl: "app/components-html/property-template.html",
  inputs: ["drawingData", "templateList"]
})

export class PropertyTemplatePanel implements OnInit {
  private drawingData:DrawingData;
  private templateList:any[];
  private template:ParticleParamater;

  constructor() {
    var template = new ParticleParamater();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.into(this.templateList[0].property);
  }

  private selectTemplate(value:Object) {
    this.drawingData.into(value);
  }
}
