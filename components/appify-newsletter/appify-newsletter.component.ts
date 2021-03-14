import { Component, OnInit, Input } from '@angular/core';
import { StyleButton, StyleFont, StylePadding } from '../../models/styles.model'

export enum NewsletterWidth {
    full = 'full',
    margin = 'margin'
}

export class NewsletterStyle {
    background_color: string;
    headline: StyleFont;
    subtitle: StyleFont;
    button: StyleButton;
    padding: StylePadding;
    background_image: string;
    background_size: string;
    background_position: string;
    background_repeat: string;
}

@Component({
  selector: 'appify-newsletter',
  templateUrl: './appify-newsletter.component.html',
  styleUrls: ['./appify-newsletter.component.css', './appify-newsletter.component.tablet.css', './appify-newsletter.component.mobile.css']
})
export class AppifyNewsletterComponent implements OnInit {
    @Input() headline: string = 'Headline'
    @Input() subtitle: string = 'Subtitle'
    @Input() buttonText: string = 'Submit';
    @Input() backgroundImage: string = ''
    @Input() backgroundColor: string = '#F7F8FC'
    @Input() width: NewsletterWidth = NewsletterWidth.full
    @Input() style: NewsletterStyle = new NewsletterStyle()

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get newsletterWidthValue() { return NewsletterWidth; }

    constructor() { }
    ngOnInit() { }

    showAlert() {
        alert('Test worked')
    }
}
