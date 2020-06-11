import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyButtonComponent } from './appify-button.component';

describe('AppifyButtonComponent', () => {
  let component: AppifyButtonComponent;
  let fixture: ComponentFixture<AppifyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
