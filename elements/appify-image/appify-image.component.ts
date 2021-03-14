import { Component, OnInit, Input } from '@angular/core';
import { StyleFont, StylePadding } from '../../models/styles.model'

export enum ImageWidth {
    full = 'full',
    margin = 'margin'
}

export class ImageStyle {
    height: number;
    padding: StylePadding;
    backgroundSize: string;
}

@Component({
  selector: 'appify-image',
  templateUrl: './appify-image.component.html',
  styleUrls: ['./appify-image.component.css']
})
export class AppifyImageComponent implements OnInit {
    @Input() url: string = ''
    @Input() style: ImageStyle = new ImageStyle()
    @Input() width: ImageWidth = ImageWidth.full

    get imageWidthValue() { return ImageWidth; }

    constructor() { }
    ngOnInit() { }
}
