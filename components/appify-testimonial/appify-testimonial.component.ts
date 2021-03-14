import { Component, OnInit, Input } from '@angular/core';
import { StyleButton, StyleFont, StylePadding } from '../../models/styles.model'

export class TestimonialModel {
    headline: string;
    subtitle: string;
    image: string;
}

export enum TestimonialWidth {
    full = 'full',
    margin = 'margin'
}

export class TestimonialStyle {
    background_color: string;
    headline: StyleFont;
    subtitle: StyleFont;
    padding: StylePadding;
    background_image: string;
    background_size: string;
    background_position: string;
    background_repeat: string;
}

@Component({
  selector: 'appify-testimonial',
  templateUrl: './appify-testimonial.component.html',
  styleUrls: ['./appify-testimonial.component.css', './appify-testimonial.component.tablet.css', './appify-testimonial.component.mobile.css']
})
export class AppifyTestimonialComponent implements OnInit {
    @Input() items: Array<TestimonialModel> = []
    @Input() width: TestimonialWidth = TestimonialWidth.full
    @Input() style: TestimonialStyle = new TestimonialStyle()

    get testimonialWidthValue() { return TestimonialWidth; }

    selectedIndex: number = 0

    constructor() { }
    ngOnInit() { }
}
