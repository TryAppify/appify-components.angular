import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyHeroComponent } from './appify-hero.component';

describe('AppifyHeroComponent', () => {
  let component: AppifyHeroComponent;
  let fixture: ComponentFixture<AppifyHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
