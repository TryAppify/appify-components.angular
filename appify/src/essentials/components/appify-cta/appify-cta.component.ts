import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-cta',
  templateUrl: './appify-cta.component.html',
  styleUrls: ['./appify-cta.component.css']
})
export class AppifyCtaComponent implements OnInit {
    @Input() headline: String = ''
    @Input() subtitle: String = ''
    @Input() buttonText: String = ''
    @Input() buttonURL: String = ''
    @Input() backgroundURL: String = 'https://via.placeholder.com/1400x500'

    constructor() { }

    ngOnInit() {
    }

}
