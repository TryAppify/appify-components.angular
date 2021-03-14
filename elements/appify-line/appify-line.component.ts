import { Component, OnInit, Input } from '@angular/core';

export enum LineAlignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

@Component({
  selector: 'appify-line',
  templateUrl: './appify-line.component.html',
  styleUrls: ['./appify-line.component.css']
})
export class AppifyLineComponent implements OnInit {
    @Input() height: number = 1
    @Input() widthPercent: number = 100
    @Input() color: string = 'black'

    // FIXME: Currently unsupported, needs to be added.
    @Input() alignment: LineAlignment = LineAlignment.center

    /// Return the enum value computed in the component since enum is not
    /// accessible outside of this scope.
    get alignmentValue() { return LineAlignment; }

    constructor() { }
    ngOnInit() { }
}
