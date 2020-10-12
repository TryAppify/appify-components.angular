import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'appify-video',
  templateUrl: './appify-video.component.html',
  styleUrls: ['./appify-video.component.css']
})
export class AppifyVideoComponent implements OnInit {
    // @Input() url: String = 'https://www.youtube.com/watch?v=ZtfTOuSHGg8&ab_channel=YCombinator'
    @Input()
    set url(url: string) {
        this.safeURL =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    @Input() caption: String = ''

    safeURL: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        // this.safeURL =  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }

    ngOnInit() {
    }

}
