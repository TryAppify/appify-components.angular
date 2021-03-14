import { Component, OnInit, Input } from '@angular/core';

import { CodelessComponentsService } from '../../services/codeless-components.service'
import { StyleFont, StylePadding } from '../../models/styles.model'

export enum TextType {
    header = 'header',
    body = 'body'
}

export enum TextWidth {
    full = 'full',
    margin = 'margin'
}

export enum Alignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

export class TextStyle {
    padding: StylePadding;
    text: StyleFont;
    backgroundColor: string;
}

@Component({
  selector: 'appify-text',
  templateUrl: './appify-text.component.html',
  styleUrls: ['./appify-text.component.css']
})
export class AppifyTextComponent implements OnInit {
    @Input() text: String = ''
    @Input() textType: TextType = TextType.header
    @Input() alignment: Alignment = Alignment.left
    @Input() width: TextWidth = TextWidth.full
    @Input() style: TextStyle = new TextStyle()

    /// Return the enum value computed in the component since enum is not
    /// accessible outside of this scope.
    get textTypeValue() { return TextType; }
    get textWidthValue() { return TextWidth; }
    get alignmentValue() { return Alignment; }

    constructor(public componentsService: CodelessComponentsService) { }
    ngOnInit() { }

    getFontSize() {
        // let ratioSize = this.getRatioSize()
        // if (ratioSize) { return ratioSize + 'px' }

        return ''
        // let override = style?.text?.size ? style?.text?.size : ''
    }

    getRatioSize() {
        if (!this.style || !this.style.text) { return '' }
        if (!this.style.text.size) { return '' }

        let marginWidth = this.componentsService.model.marginWidth
        let fullTextSize = this.cleanPixelText(this.style.text.size)
        let currentScreenWidth = this.componentsService.model.screenWidth
        let ratio = currentScreenWidth / marginWidth

        return (fullTextSize * ratio)
    }

    cleanPixelText(string) {
        return string.replace(/px/g,'');
    }
}
