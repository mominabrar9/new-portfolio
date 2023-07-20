import { Component, Input } from '@angular/core';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  selectedTab: Tabs = Tabs.e;

}
