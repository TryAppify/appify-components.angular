import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum IndicatorType {
    none = '',
    circle = 'circle',
    rectangle = 'rectangle',
    square = 'square'
}

@Component({
  selector: 'appify-indicators',
  templateUrl: './appify-indicators.component.html',
  styleUrls: ['./appify-indicators.component.css']
})
export class AppifyIndicatorsComponent implements OnInit {
    @Input() indicatorType: IndicatorType = IndicatorType.none
    @Input() count: number = 0
    @Input() selectedIndex: number = 0

    @Output() didSelectIndex = new EventEmitter<any>();

    temp = Array;
    math = Math;
    get indicatorValue() { return IndicatorType; }

    constructor() { }
    ngOnInit() { }

    selectIndex(index) {
        this.selectedIndex = index
        this.didSelectIndex.emit(index)
    }
}
