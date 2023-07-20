import { Component, Input } from '@angular/core';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-display-rhs',
  templateUrl: './display-rhs.component.html',
  styleUrls: ['./display-rhs.component.scss']
})
export class DisplayRhsComponent {

  @Input()
  selectedTab: Tabs = Tabs.e;

  tabs = Tabs;
}
