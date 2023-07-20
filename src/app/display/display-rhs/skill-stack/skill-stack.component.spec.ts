import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStackComponent } from './skill-stack.component';

describe('SkillStackComponent', () => {
  let component: SkillStackComponent;
  let fixture: ComponentFixture<SkillStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillStackComponent]
    });
    fixture = TestBed.createComponent(SkillStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
