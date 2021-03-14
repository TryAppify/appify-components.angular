import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyNewsletterComponent } from './appify-newsletter.component';

describe('AppifyNewsletterComponent', () => {
  let component: AppifyNewsletterComponent;
  let fixture: ComponentFixture<AppifyNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
