import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-navigation-header',
  templateUrl: './appify-navigation-header.component.html',
  styleUrls: ['./appify-navigation-header.component.css']
})
export class AppifyNavigationHeaderComponent implements OnInit {
    @Input() logoURL: string = 'https://via.placeholder.com/60x60'

    constructor() { }

    ngOnInit() {
    }
}
