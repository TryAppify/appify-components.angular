import { Component, OnInit, Input } from '@angular/core';

export enum WallAlignment {
    left = 'left',
    right = 'right'
}

export class WallModel {
    image: string;
    url: string;
}

@Component({
  selector: 'appify-wall',
  templateUrl: './appify-wall.component.html',
  styleUrls: ['./appify-wall.component.css', './appify-wall.component.tablet.css', './appify-wall.component.mobile.css']
})
export class AppifyWallComponent implements OnInit {
    @Input() height: number = 800
    @Input() maxWidth: number = 800
    @Input() alignment: WallAlignment = WallAlignment.left
    @Input() items: Array<WallModel> = []

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get alignmentValue() { return WallAlignment; }

    constructor() { }
    ngOnInit() { }

    selectedItem(url) {
        window.open(url, '_blank');
    }
}
