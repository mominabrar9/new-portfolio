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

  downloadFile() {
    const fileUrl = 'https://docs.google.com/document/d/1UAZAVxx64KW3QzKB6YAg5yGjJ0Wr7fSH/export?format=docx'; // Use export link for direct download

    // Create a temporary link element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'resume_abrarmomin.docx'; // Set the desired filename
    document.body.appendChild(a); // Append to the body to make it clickable
    a.click(); // Trigger the download
    document.body.removeChild(a); // Clean up by removing the element
  }
}
