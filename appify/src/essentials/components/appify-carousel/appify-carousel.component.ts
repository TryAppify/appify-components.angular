import { Component, OnInit, Input } from '@angular/core';

export class CarouselModel {
    image: string;
    title: string;
    subtitle: string;
    url: string;
}

@Component({
  selector: 'appify-carousel',
  templateUrl: './appify-carousel.component.html',
  styleUrls: ['./appify-carousel.component.css']
})
export class AppifyCarouselComponent implements OnInit {
    @Input() headline: String = ''
    @Input() subtitle: String = ''
    @Input() columns: Number = 2

    @Input() items: Array<CarouselModel> = [{
        image: 'https://via.placeholder.com/500x500',
        title: 'Title 1',
        subtitle: 'Subtitle',
        url: ''
    }, {
        image: 'https://via.placeholder.com/500x500',
        title: 'Title 2',
        subtitle: 'Subtitle',
        url: ''
    }, {
        image: 'https://via.placeholder.com/500x500',
        title: 'Title 3',
        subtitle: 'Subtitle',
        url: ''
    }, {
        image: 'https://via.placeholder.com/500x500',
        title: 'Title 4',
        subtitle: 'Subtitle',
        url: ''
    }]

    constructor() { }

    ngOnInit() {
    }

}
