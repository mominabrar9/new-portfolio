import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/services/data-service/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  resumeData;

  constructor(private dataService: DataService) {

    this.resumeData = dataService.resumeData;
  }

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
