import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRhsComponent } from './display-rhs.component';

describe('DisplayRhsComponent', () => {
  let component: DisplayRhsComponent;
  let fixture: ComponentFixture<DisplayRhsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayRhsComponent]
    });
    fixture = TestBed.createComponent(DisplayRhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
