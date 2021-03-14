import { Component, OnInit, Input } from '@angular/core';
import { StyleButton, StyleFont, StylePadding } from '../../models/styles.model'

export enum CallToActionWidth {
    full = 'full',
    margin = 'margin'
}

export class CallToActionStyle {
    headline: StyleFont;
    subtitle: StyleFont;
    paragraph: StyleFont;
    button: StyleButton;
    padding: StylePadding;
    background_image: string;
    background_size: string;
    background_position: string;
}

@Component({
  selector: 'appify-cta',
  templateUrl: './appify-cta.component.html',
  styleUrls: ['./appify-cta.component.css', './appify-cta.component.tablet.css', './appify-cta.component.mobile.css']
})
export class AppifyCtaComponent implements OnInit {
    @Input() headline: string = 'Headline'
    @Input() subtitle: string = 'Subtitle'
    @Input() paragraph: string = 'Paragraphy'
    @Input() buttonText: string = 'Click Me'
    @Input() buttonURL: string = ''
    @Input() backgroundColor: string = ''
    @Input() backgroundURL: string = ''// 'https://via.placeholder.com/1400x500'
    @Input() width: CallToActionWidth = CallToActionWidth.margin
    @Input() style: CallToActionStyle = new CallToActionStyle();

    get ctaWidthValue() { return CallToActionWidth; }

    constructor() { }
    ngOnInit() { }

    clickButton() {
        window.open(this.buttonURL, '_self');
    }
}
