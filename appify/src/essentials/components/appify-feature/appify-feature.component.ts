import { Component, OnInit, Input } from '@angular/core';

export enum FeatureAlignment {
    left = 'left',
    center = 'center',
    right = 'right'
}


@Component({
  selector: 'appify-feature',
  templateUrl: './appify-feature.component.html',
  styleUrls: ['./appify-feature.component.css']
})
export class AppifyFeatureComponent implements OnInit {
    @Input() featureAlignment: FeatureAlignment = FeatureAlignment.center
    @Input() imageURL: string = 'https://via.placeholder.com/400x400'
    @Input() title: string = 'Title'
    @Input() subtitle: string = 'Subtitle'
    @Input() body: string = 'Body'
    @Input() buttonText: string = 'Learn More'
    @Input() buttonURL: string = ''

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get featureAlignmentValue() { return FeatureAlignment; }

    constructor() { }

    ngOnInit() {
    }

    clickButton() {
        window.open(this.buttonURL, '_blank');
    }
}
