import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum ButtonType {
    square = 'square',
    rounded = 'rounded'
}

export enum ButtonFillType {
    filled = 'filled',
    border = 'border'
}

@Component({
  selector: 'appify-button',
  templateUrl: './appify-button.component.html',
  styleUrls: ['./appify-button.component.css']
})
export class AppifyButtonComponent implements OnInit {
    @Input() buttonType: ButtonType = ButtonType.square
    @Input() buttonFillType: ButtonFillType = ButtonFillType.filled
    @Input() title: String = ''
    @Output() selected = new EventEmitter<any>();

    /// Return the enum value computed in the component since enum is not
    /// accessible outside of this scope.
    get buttonTypeValue() { return ButtonType; }
    get buttonFillTypeValue() { return ButtonFillType; }

    constructor() { }

    ngOnInit() {
    }

    click() {
        this.selected.emit()
    }
}
