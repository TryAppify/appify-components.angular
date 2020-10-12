import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyCarouselComponent } from './appify-carousel.component';

describe('AppifyCarouselComponent', () => {
  let component: AppifyCarouselComponent;
  let fixture: ComponentFixture<AppifyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
