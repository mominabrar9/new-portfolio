import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-stack',
  templateUrl: './skill-stack.component.html',
  styleUrls: ['./skill-stack.component.scss']
})
export class SkillStackComponent {

  techList: Array<{ name: string, title: string, color: string }> = [];

  constructor() {
    this.techList = [
      { name: 'angular', title: 'Angular', color: '#ec0434' },
      { name: 'language-typescript', title: 'TypeScript', color: '#3178c6' },
      { name: 'language-javascript', title: 'JavaScript', color: '#ffdf00' },
      { name: 'language-html5', title: 'HTML', color: '#fe5722' },
      { name: 'language-css3', title: 'CSS', color: '#2794cd' },
      { name: 'tailwind', title: 'Tailwind', color: '#38bdf8' },
      { name: 'nodejs', title: 'nodejs', color: '#8cc84c' },
      { name: 'language-java', title: 'Java', color: '#fe9819' },
    ];

    this.techList = this.arrayShuffle(this.techList);
  }

  arrayShuffle(theArray: Array<any>): Array<any> {
    const shuffledArray = [...theArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
}
