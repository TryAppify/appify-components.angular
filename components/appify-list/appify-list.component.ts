import { Component, OnInit, Input } from '@angular/core';

export class ListModel {
    image: string;
    header: string;
    body: string;
}

export enum ListWidth {
    full = 'full',
    margin = 'margin'
}

@Component({
  selector: 'appify-list',
  templateUrl: './appify-list.component.html',
  styleUrls: ['./appify-list.component.css', './appify-list.component.tablet.css', './appify-list.component.mobile.css']
})
export class AppifyListComponent implements OnInit {
    @Input() style: any = {}
    @Input() items: Array<ListModel> = []
    @Input() width: ListWidth = ListWidth.full

    get listWidthValue() { return ListWidth; }

    constructor() { }
    ngOnInit() { }
}
