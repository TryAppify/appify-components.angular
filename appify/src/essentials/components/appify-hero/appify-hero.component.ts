import { Component, OnInit, Input } from '@angular/core';

export enum HeroAlignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

@Component({
  selector: 'appify-hero',
  templateUrl: './appify-hero.component.html',
  styleUrls: ['./appify-hero.component.css']
})
export class AppifyHeroComponent implements OnInit {
    @Input() heroAlignment: HeroAlignment = HeroAlignment.left
    @Input() headline: string = ''
    @Input() subtitle: string = ''
    @Input() buttonText: string = ''
    @Input() buttonURL: string = ''
    @Input() backgroundURL: string = 'https://via.placeholder.com/1500x500'

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get heroAlignmentValue() { return HeroAlignment; }

    constructor() { }

    ngOnInit() {
    }

    clickButton() {
        window.open(this.buttonURL, '_blank');
    }
}
