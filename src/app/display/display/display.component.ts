import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tabs } from 'src/tabs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  constructor(private http: HttpClient) {
  }
}
