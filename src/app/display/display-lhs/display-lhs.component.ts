import { Component } from '@angular/core';

@Component({
  selector: 'app-display-lhs',
  templateUrl: './display-lhs.component.html',
  styleUrls: ['./display-lhs.component.scss']
})
export class DisplayLhsComponent {

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
