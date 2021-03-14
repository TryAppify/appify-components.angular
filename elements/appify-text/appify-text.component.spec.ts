import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyTextComponent } from './appify-text.component';

describe('AppifyTextComponent', () => {
  let component: AppifyTextComponent;
  let fixture: ComponentFixture<AppifyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
