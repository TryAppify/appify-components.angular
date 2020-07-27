import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Elements
import { AppifyButtonComponent } from './elements/appify-button/appify-button.component';

// Navigation
import { AppifyNavigationHeaderComponent } from './navigation/appify-navigation-header/appify-navigation-header.component';
import { AppifyNavigationFooterComponent } from './navigation/appify-navigation-footer/appify-navigation-footer.component';

// Components
import { AppifyHeroComponent } from './components/appify-hero/appify-hero.component';
import { AppifyFeatureComponent } from './components/appify-feature/appify-feature.component';
import { AppifyCtaComponent } from './components/appify-cta/appify-cta.component';
import { AppifyGridComponent } from './components/appify-grid/appify-grid.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        AppifyButtonComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyGridComponent,
        AppifyHeroComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent
    ],
    providers: [

    ],
    exports: [
        AppifyButtonComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyGridComponent,
        AppifyHeroComponent
    ],
    entryComponents: [

    ]
})

export class AppifyModule {}
