import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-image',
  templateUrl: './appify-image.component.html',
  styleUrls: ['./appify-image.component.css']
})
export class AppifyImageComponent implements OnInit {
    @Input() url: String = ''
    @Input() caption: String = ''

    constructor() { }

    ngOnInit() {

    }
}
