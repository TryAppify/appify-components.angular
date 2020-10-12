import { Component, OnInit, Input } from '@angular/core';

export enum TextType {
    header = 'header',
    body = 'body'
}

@Component({
  selector: 'appify-text',
  templateUrl: './appify-text.component.html',
  styleUrls: ['./appify-text.component.css']
})
export class AppifyTextComponent implements OnInit {
    @Input() text: String = ''
    @Input() textType: TextType = TextType.header

    /// Return the enum value computed in the component since enum is not
    /// accessible outside of this scope.
    get textTypeValue() { return TextType; }

    constructor() { }

    ngOnInit() {

    }
}
