import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

enum ButtonType {
    square,
    rounded
}

@Component({
  selector: 'appify-button',
  templateUrl: './appify-button.component.html',
  styleUrls: ['./appify-button.component.css']
})
export class AppifyButtonComponent implements OnInit {
    @Input() buttonType: ButtonType = ButtonType.square
    @Input() title: String = ''
    @Output() selected = new EventEmitter<any>();

    /// Return the buttonType value computed in the component since enum is not
    /// accessible outside of this scope.
    get buttonTypeValue() { return ButtonType; }

    constructor() { }

    ngOnInit() {
    }

    click() {
        this.selected.emit()
    }
}
