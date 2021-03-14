import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifySpacerComponent } from './appify-spacer.component';

describe('AppifySpacerComponent', () => {
  let component: AppifySpacerComponent;
  let fixture: ComponentFixture<AppifySpacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifySpacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifySpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
