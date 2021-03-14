import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyIndicatorsComponent } from './appify-indicators.component';

describe('AppifyIndicatorsComponent', () => {
  let component: AppifyIndicatorsComponent;
  let fixture: ComponentFixture<AppifyIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
