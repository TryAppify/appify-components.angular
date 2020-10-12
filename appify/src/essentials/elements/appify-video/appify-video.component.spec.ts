import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyVideoComponent } from './appify-video.component';

describe('AppifyVideoComponent', () => {
  let component: AppifyVideoComponent;
  let fixture: ComponentFixture<AppifyVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
