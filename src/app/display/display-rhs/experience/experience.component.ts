import { Component } from '@angular/core';
import resumeData from 'src/assets/resume/resume_abrar.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  resumeData = resumeData;

  getTechStack(projects: any[]): string[] {
    const techStackSet = new Set<string>();

    projects.forEach((project) => {
      project.techStack.forEach((tech: string) => {
        techStackSet.add(tech);
      });
    });
    return Array.from(techStackSet);
  }
}
