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

  downloadFile(fileType: '.docx' | '.pdf') {
    const fileUrl = fileType == '.docx' ? '/assets/resume/resume_abrar.docx' : '/assets/resume/resume_abrar.pdf';

    // Create a temporary link element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'resume_abrar' + fileType; // Set the desired filename
    document.body.appendChild(a); // Append to the body to make it clickable
    a.click(); // Trigger the download
    document.body.removeChild(a); // Clean up by removing the element
  }
}
