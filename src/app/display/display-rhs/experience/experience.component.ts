import { Component } from '@angular/core';
import resumeData from 'src/assets/resume/resume_abrar.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  resumeData = resumeData;
}
