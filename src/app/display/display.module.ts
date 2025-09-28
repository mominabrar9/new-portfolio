import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplayLhsComponent } from './display-lhs/display-lhs.component';
import { DisplayRhsComponent } from './display-rhs/display-rhs.component';
import { SkillStackComponent } from './display-rhs/skill-stack/skill-stack.component';
import { ExperienceComponent } from './display-rhs/experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../shared/card/card.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectComponent } from './display-rhs/project/project.component';
import { DataService } from 'src/services/data-service/data.service';

@NgModule({
  declarations: [
    DisplayComponent,
    DisplayLhsComponent,
    DisplayRhsComponent,
    SkillStackComponent,
    ExperienceComponent,
    CardComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    DisplayComponent
  ],
  providers: [DataService]

})
export class DisplayModule { }
