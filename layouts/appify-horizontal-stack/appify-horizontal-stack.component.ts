import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { StyleButton, StylePadding } from '../../models/styles.model'

@Component({
  selector: 'appify-horizontal-stack',
  templateUrl: './appify-horizontal-stack.component.html',
  styleUrls: ['./appify-horizontal-stack.component.css']
})
export class AppifyHorizontalStackComponent implements OnInit {
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

    getElementWidth() {
        return 100 / this.blocks.length
    }
}
