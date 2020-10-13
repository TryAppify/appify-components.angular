import { Component, OnInit, Input } from '@angular/core';

export enum SliderAlignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

export class SliderModel {
    image: string;
    header: string;
    subtitle: string;
    buttonText: string;
    buttonURL: string;
}

@Component({
  selector: 'appify-slider',
  templateUrl: './appify-slider.component.html',
  styleUrls: ['./appify-slider.component.css']
})
export class AppifySliderComponent implements OnInit {
    @Input() height: number = 500
    @Input() sliderAlignment: SliderAlignment = SliderAlignment.left
    @Input() items: Array<SliderModel> = [{
        image: 'https://via.placeholder.com/1500x500',
        header: 'This is the first headline!',
        subtitle: 'This is a subtitle below the headline.',
        buttonText: 'Button 1',
        buttonURL: ''
    }, {
        image: 'https://via.placeholder.com/1500x500',
        header: 'This is the second headline!',
        subtitle: 'This is a subtitle below the headline.',
        buttonText: 'Button 2',
        buttonURL: ''
    }, {
        image: 'https://via.placeholder.com/1500x500',
        header: 'This is a third headline!',
        subtitle: 'This is a subtitle below the headline.',
        buttonText: 'Button 3',
        buttonURL: ''
    }]

    headline: string = ''
    subtitle: string = ''
    buttonText: string = ''
    buttonURL: string = ''

    selectedImage: string = ''
    selectedIndex: number = 0
    interval: any = null
    intervalDuration: number = 5000

    /// Return the heroAlignment value computed in the component since enum is not
    /// accessible outside of this scope.
    get sliderAlignmentValue() { return SliderAlignment; }

    constructor() {
        this.setupView()
    }

    ngOnInit() {
    }

    clickButton() {
        window.open(this.buttonURL, '_blank');
    }

    setupView() {
        this.interval = setInterval(()=> {
            this.naturalIncrement();
        }, this.intervalDuration);
        this.updateView();
    }

    updateView() {
        this.selectedImage = this.items[this.selectedIndex].image
        this.headline = this.items[this.selectedIndex].header
        this.subtitle = this.items[this.selectedIndex].subtitle
        this.buttonText = this.items[this.selectedIndex].buttonText
        this.buttonURL = this.items[this.selectedIndex].buttonURL
    }

    selectIndex(index) {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.selectedIndex = index;
        this.setupView();
    }

    naturalIncrement() {
        this.selectedIndex++

        if (this.selectedIndex > (this.items.length - 1)) {
            this.selectedIndex = 0
        }

        this.updateView()
    }
}
