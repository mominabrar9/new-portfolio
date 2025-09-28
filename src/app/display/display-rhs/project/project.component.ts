import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data-service/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  resumeData: any;
  projectList: Array<any> = [];

  companyIndex: number;

  constructor(private dataService: DataService) {
    this.resumeData = dataService.resumeData;
    this.companyIndex = this.dataService.projectCompIndex;
  }

  ngOnInit(): void {
    this.projectList = this.resumeData.experience.map((ele: { projects: Array<any>; }) => ele.projects)[this.companyIndex];
    console.log();
  }

}
