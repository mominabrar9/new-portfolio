import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRhsComponent } from './display-rhs.component';
import { ExperienceComponent } from './experience/experience.component';
import { MatIconModule } from '@angular/material/icon';

describe('DisplayRhsComponent', () => {
  let component: DisplayRhsComponent;
  let fixture: ComponentFixture<DisplayRhsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayRhsComponent,
        ExperienceComponent
      ]
    });
    fixture = TestBed.createComponent(DisplayRhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
