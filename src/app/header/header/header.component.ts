import { Component } from '@angular/core';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedTab: Tabs = Tabs.s;
  tabs = Tabs;

  refreshPage(): void {
    window.location.reload();
  }
}
