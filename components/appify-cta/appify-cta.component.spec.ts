import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyCtaComponent } from './appify-cta.component';

describe('AppifyCtaComponent', () => {
  let component: AppifyCtaComponent;
  let fixture: ComponentFixture<AppifyCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
