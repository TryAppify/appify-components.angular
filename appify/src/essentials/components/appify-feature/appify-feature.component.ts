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
    @Input() buttonText: String = 'Learn More'

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get featureAlignmentValue() { return FeatureAlignment; }

    constructor() { }

    ngOnInit() {
    }

}
