import { Injectable } from '@angular/core';
import { Tabs } from 'src/tabs';
import resumeData from 'src/assets/resume/resume_abrar.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  resumeData = resumeData;
  selectedTab: Tabs = Tabs.e;
  projectCompIndex: number = 0;

  constructor() { }
}
