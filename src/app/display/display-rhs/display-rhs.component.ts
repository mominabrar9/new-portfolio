import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/services/data-service/data.service';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-display-rhs',
  templateUrl: './display-rhs.component.html',
  styleUrls: ['./display-rhs.component.scss']
})
export class DisplayRhsComponent {

  companyIndex: number = 0;

  tabs = Tabs;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
}
