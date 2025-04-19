import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmitterSubjectService } from 'src/services/emitter-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private emitterSubject: EmitterSubjectService, private http: HttpClient) {

  }
}
