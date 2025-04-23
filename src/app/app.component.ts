import { Component, OnInit } from '@angular/core';
import { EmitterSubjectService } from 'src/services/emitter-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-portfolio';

  constructor(
    private emitterSubject: EmitterSubjectService) {

  }

  ngOnInit(): void {
  }

}
