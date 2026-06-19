import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume.interface';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  @Input() resume!: Resume;

  get interest() { return this.resume.interests[0]; }

  get workTypeDisplay(): string {
    return this.interest.workType
      .map(t => t.charAt(0).toUpperCase() + t.slice(1))
      .join(' · ');
  }

  get isAvailable(): boolean { return this.interest.status === 'open'; }
}
