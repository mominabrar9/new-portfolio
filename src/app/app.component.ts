import { Component, OnInit } from '@angular/core';
import { EmitterSubjectService } from 'src/services/emitter-subject.service';
import { TrackingService } from 'src/services/tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-portfolio';

  constructor(
    private trackingService: TrackingService,
    private emitterSubject: EmitterSubjectService) {

  }

  ngOnInit(): void {
    this.trackingService.trackPageViews().subscribe((count: any) => {

      this.emitterSubject.updateData(count?.count);
    });
  }

}
