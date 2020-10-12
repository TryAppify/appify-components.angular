import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-spacer',
  templateUrl: './appify-spacer.component.html',
  styleUrls: ['./appify-spacer.component.css']
})
export class AppifySpacerComponent implements OnInit {
    @Input() space: Number = 0

    constructor() { }

    ngOnInit() {
    }

}
