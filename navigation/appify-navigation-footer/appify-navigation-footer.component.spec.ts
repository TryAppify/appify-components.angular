import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyNavigationFooterComponent } from './appify-navigation-footer.component';

describe('AppifyNavigationFooterComponent', () => {
  let component: AppifyNavigationFooterComponent;
  let fixture: ComponentFixture<AppifyNavigationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyNavigationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyNavigationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
