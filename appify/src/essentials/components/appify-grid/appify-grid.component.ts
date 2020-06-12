import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appify-grid',
  templateUrl: './appify-grid.component.html',
  styleUrls: ['./appify-grid.component.css']
})
export class AppifyGridComponent implements OnInit {
    @Input() headline: String = ''
    @Input() subtitle: String = ''
    @Input() columns: Number = 5

    items: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    constructor() { }

    ngOnInit() {
    }

}
