import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/services/data-service/data.service';
import { EmitterSubjectService } from 'src/services/emitter-service/emitter-subject.service';
import { Tabs } from 'src/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private emitterSubject: EmitterSubjectService,
    private http: HttpClient) {

  }
}
