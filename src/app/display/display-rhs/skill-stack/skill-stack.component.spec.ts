import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStackComponent } from './skill-stack.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('SkillStackComponent', () => {
  let component: SkillStackComponent;
  let fixture: ComponentFixture<SkillStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillStackComponent],
      imports: [
        MatIconModule,
        MatIconTestingModule
      ]
    });
    fixture = TestBed.createComponent(SkillStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
