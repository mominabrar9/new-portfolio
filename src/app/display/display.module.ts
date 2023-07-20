import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplayLhsComponent } from './display-lhs/display-lhs.component';
import { DisplayRhsComponent } from './display-rhs/display-rhs.component';
import { SkillStackComponent } from './display-rhs/skill-stack/skill-stack.component';
import { ExperienceComponent } from './display-rhs/experience/experience.component';

@NgModule({
  declarations: [
    DisplayComponent,
    DisplayLhsComponent,
    DisplayRhsComponent,
    SkillStackComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    DisplayComponent
  ]
})
export class DisplayModule { }
