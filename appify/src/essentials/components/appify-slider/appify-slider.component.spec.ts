import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifySliderComponent } from './appify-slider.component';

describe('AppifySliderComponent', () => {
  let component: AppifySliderComponent;
  let fixture: ComponentFixture<AppifySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
