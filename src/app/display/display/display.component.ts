import { Component, Input } from '@angular/core';
import { Tabs } from 'src/tabs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  selectedTab: Tabs = Tabs.e;

  constructor(private http: HttpClient) {
  }
}
