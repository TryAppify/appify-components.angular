import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyFeatureComponent } from './appify-feature.component';

describe('AppifyFeatureComponent', () => {
  let component: AppifyFeatureComponent;
  let fixture: ComponentFixture<AppifyFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
