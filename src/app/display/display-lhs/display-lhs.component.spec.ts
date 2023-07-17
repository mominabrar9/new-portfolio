import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLhsComponent } from './display-lhs.component';

describe('DisplayLhsComponent', () => {
  let component: DisplayLhsComponent;
  let fixture: ComponentFixture<DisplayLhsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLhsComponent]
    });
    fixture = TestBed.createComponent(DisplayLhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
