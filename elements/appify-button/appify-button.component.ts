import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StyleButton, StylePadding } from '../../models/styles.model'

export enum ButtonType {
    square = 'square',
    rounded = 'rounded'
}

export enum ButtonFillType {
    none = 'none',
    filled = 'filled',
    border = 'border'
}

export enum ButtonContainerWidth {
    full = 'full',
    margin = 'margin'
}

export enum Alignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

@Component({
  selector: 'appify-button',
  templateUrl: './appify-button.component.html',
  styleUrls: ['./appify-button.component.css']
})
export class AppifyButtonComponent implements OnInit {
    @Input() title: String = ''
    @Input() url: string = ''
    @Input() alignment: Alignment = Alignment.center
    @Input() width: ButtonContainerWidth = ButtonContainerWidth.full
    @Input() padding: StylePadding = new StylePadding()
    @Input() style: StyleButton = new StyleButton()
    @Output() didClick = new EventEmitter<any>()

    isHovering: boolean = false
    objectKeys = Object.keys;

    /// Return the enum value computed in the component since enum is not
    /// accessible outside of this scope.
    get buttonTypeValue() { return ButtonType; }
    get buttonFillTypeValue() { return ButtonFillType; }
    get containerWidthValue() { return ButtonContainerWidth; }
    get alignmentValue() { return Alignment; }

    constructor() { }
    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.style && changes.style.currentValue) {
            let current = changes.style.currentValue

            console.log('Button Style: ' + JSON.stringify(current))

            // if (current.type) { this.style.type = current.type }
            if (current.fillType) { this.style.fillType = current.fillType }
            if (current.normalState) { this.style.normalState.color = current.normalState.color }
            if (current.normalState) { this.style.normalState.textColor = current.normalState.textColor }
            if (current.hoverState) { this.style.hoverState.color = current.hoverState.color }
            if (current.hoverState) { this.style.hoverState.textColor = current.hoverState.textColor }
        }
    }

    backgroundColor() {
        if (this.style == null) { return '' }
        if (this.style.normalState == null) { return '' }
        if (this.style.hoverState == null) { return '' }

        if (this.isHovering) {
            return this.style.hoverState.color
        } else {
            if (this.style.fillType == this.buttonFillTypeValue.border || this.style.fillType == this.buttonFillTypeValue.none) { return 'transparent' }
            if (this.style.normalState && this.style.normalState.color) { return this.style.normalState.color }
        }

        return ''
    }

    borderColor() {
        if (this.style == null) { return '' }
        if (this.style.normalState == null) { return '' }

        if (this.style.fillType == this.buttonFillTypeValue.border) { return this.style.normalState.color }
        return 'transparent'
    }

    color() {
        if (this.style == null) { return '' }
        if (this.style.normalState == null) { return '' }
        if (this.style.hoverState == null) { return '' }

        if (this.isHovering) { return this.style.hoverState.textColor }
        return this.style.normalState.textColor
    }

    click() {
        if (this.url.length > 0) {
            window.location.href = this.url
            return
        }

        this.didClick.emit()
    }
}
