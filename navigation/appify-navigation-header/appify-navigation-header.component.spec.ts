import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyNavigationHeaderComponent } from './appify-navigation-header.component';

describe('AppifyNavigationHeaderComponent', () => {
  let component: AppifyNavigationHeaderComponent;
  let fixture: ComponentFixture<AppifyNavigationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyNavigationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
