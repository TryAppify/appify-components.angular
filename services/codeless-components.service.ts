import { OnInit, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

export class CodelessSizingModel {
    marginWidth: number = 1440
    screenWidth: number;

    init(object: any) {
        this.marginWidth = object.marginWidth
        this.screenWidth = object.screenWidth
    }
}

@Injectable({
  providedIn: 'root'
})
export class CodelessComponentsService {
    /// Service model for property storage
    public model: CodelessSizingModel = new CodelessSizingModel()

    constructor(private router: Router) { }
    ngOnInit() { }
    ngOnDestroy() { }

    route(url) {
        let external = url.includes('://') || url.includes('www.')

        if (external) {
            window.open(url, '_blank');
            return
        }

        this.router.navigate([url]);
    }
}
