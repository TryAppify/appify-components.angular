import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-grid',
  templateUrl: './appify-grid.component.html',
  styleUrls: ['./appify-grid.component.css']
})
export class AppifyGridComponent implements OnInit {
    @Input() headline: String = ''
    @Input() subtitle: String = ''
    @Input() columns: Number = 2

    items: Array<any> = [1, 2, 3, 4]

    constructor() { }

    ngOnInit() {
    }

}
