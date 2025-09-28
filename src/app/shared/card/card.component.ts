import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineAll } from 'rxjs';
import { DataService } from 'src/services/data-service/data.service';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() header: string = '';
  @Input() footer: string = '';

  @Input() companyIndex: number = 0;

  tabs = Tabs;

  constructor(private dataService: DataService) { }

  switchToProjects(): void {
    this.dataService.projectCompIndex = this.companyIndex;
    this.dataService.selectedTab = this.tabs.p;
  }
}