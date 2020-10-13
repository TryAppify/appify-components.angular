import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Elements
import { AppifyButtonComponent } from './elements/appify-button/appify-button.component';
import { AppifyImageComponent } from './elements/appify-image/appify-image.component';
import { AppifyTextComponent } from './elements/appify-text/appify-text.component';
import { AppifyVideoComponent } from './elements/appify-video/appify-video.component';
import { AppifySpacerComponent } from './elements/appify-spacer/appify-spacer.component';

// Navigation
import { AppifyNavigationHeaderComponent } from './navigation/appify-navigation-header/appify-navigation-header.component';
import { AppifyNavigationFooterComponent } from './navigation/appify-navigation-footer/appify-navigation-footer.component';

// Components
import { AppifyCarouselComponent } from './components/appify-carousel/appify-carousel.component';
import { AppifyCtaComponent } from './components/appify-cta/appify-cta.component';
import { AppifyFeatureComponent } from './components/appify-feature/appify-feature.component';
import { AppifyFormComponent } from './components/appify-form/appify-form.component';
import { AppifyGridComponent } from './components/appify-grid/appify-grid.component';
import { AppifyHeroComponent } from './components/appify-hero/appify-hero.component';
import { AppifyListComponent } from './components/appify-list/appify-list.component';
import { AppifySliderComponent } from './components/appify-slider/appify-slider.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        AppifyButtonComponent,
        AppifyImageComponent,
        AppifySpacerComponent,
        AppifyTextComponent,
        AppifyVideoComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyGridComponent,
        AppifyHeroComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent,
        AppifyImageComponent,
        AppifyVideoComponent,
        AppifyTextComponent,
        AppifySpacerComponent,
        AppifyListComponent,
        AppifyCarouselComponent,
        AppifySliderComponent,
        AppifyFormComponent
    ],
    providers: [

    ],
    exports: [
        AppifyButtonComponent,
        AppifyImageComponent,
        AppifySpacerComponent,
        AppifyTextComponent,
        AppifyVideoComponent,
        AppifyNavigationHeaderComponent,
        AppifyNavigationFooterComponent,
        AppifyCarouselComponent,
        AppifyCtaComponent,
        AppifyFeatureComponent,
        AppifyFormComponent,
        AppifyGridComponent,
        AppifyHeroComponent,
        AppifyListComponent,
        AppifySliderComponent
    ],
    entryComponents: [

    ]
})

export class AppifyModule {}
