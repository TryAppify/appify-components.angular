import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Elements
import { AppifyButtonComponent } from './elements/appify-button/appify-button.component';

// Components
import { AppifyHeroComponent } from './components/appify-hero/appify-hero.component';
import { AppifyFeatureComponent } from './components/appify-feature/appify-feature.component';
import { AppifyCtaComponent } from './components/appify-cta/appify-cta.component';
import { AppifyGridComponent } from './components/appify-grid/appify-grid.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppifyButtonComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyGridComponent,
        AppifyHeroComponent
    ],
    providers: [

    ],
    exports: [
        AppifyButtonComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyGridComponent,
        AppifyHeroComponent
    ],
    entryComponents: [

    ]
})

export class AppifyModule {}
