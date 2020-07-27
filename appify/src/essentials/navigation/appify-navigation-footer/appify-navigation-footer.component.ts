import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-navigation-footer',
  templateUrl: './appify-navigation-footer.component.html',
  styleUrls: ['./appify-navigation-footer.component.css']
})
export class AppifyNavigationFooterComponent implements OnInit {
    @Input() logoURL: string = 'https://via.placeholder.com/60x60'
    @Input() company: string = ''

    constructor() { }

    ngOnInit() {
    }
}
