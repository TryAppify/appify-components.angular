import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppifyListComponent } from './appify-list.component';

describe('AppifyListComponent', () => {
  let component: AppifyListComponent;
  let fixture: ComponentFixture<AppifyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppifyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
