import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StyleButton, StylePadding } from '../../models/styles.model'

@Component({
  selector: 'appify-vertical-stack',
  templateUrl: './appify-vertical-stack.component.html',
  styleUrls: ['./appify-vertical-stack.component.css']
})
export class AppifyVerticalStackComponent implements OnInit {
    @Input() blocks: Array<any> = []
    @Input() isEditing: boolean = false
    @Input() identifier: string = ''
    // @Input() width: ButtonContainerWidth = ButtonContainerWidth.full
    // @Input() padding: StylePadding = new StylePadding()
    // @Input() style: StyleButton = new StyleButton()

    constructor() { }
    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {

    }
}
