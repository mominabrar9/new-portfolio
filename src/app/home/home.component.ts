import { Component } from '@angular/core';
import { EmitterSubjectService } from 'src/services/emitter-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  visitorCount: number = 0;

  constructor(private emitterSubject: EmitterSubjectService) {

    this.emitterSubject.data$.subscribe(data => {
      this.visitorCount = Number(data);

    });
  }
}
