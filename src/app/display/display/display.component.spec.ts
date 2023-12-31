import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { DisplayLhsComponent } from '../display-lhs/display-lhs.component';
import { DisplayRhsComponent } from '../display-rhs/display-rhs.component';
import { ExperienceComponent } from '../display-rhs/experience/experience.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayComponent,
        DisplayLhsComponent,
        DisplayRhsComponent,
        ExperienceComponent
      ]
    });
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
