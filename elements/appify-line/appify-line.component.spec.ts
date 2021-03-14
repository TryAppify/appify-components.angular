import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyLineComponent } from './appify-line.component';

describe('AppifyLineComponent', () => {
  let component: AppifyLineComponent;
  let fixture: ComponentFixture<AppifyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
