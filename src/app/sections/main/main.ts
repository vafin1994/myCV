import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume.interface';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  @Input() resume!: Resume;

  get firstName(): string { return this.resume.basics.name.split(' ')[0]; }
  get lastName(): string { return this.resume.basics.name.split(' ').slice(1).join(' '); }
  get linkedIn() { return this.resume.basics.profiles.find(p => p.network === 'LinkedIn'); }
  get workTypeBadge(): string {
    return this.resume.interests[0].workType
      .map(t => t.charAt(0).toUpperCase() + t.slice(1))
      .join(' / ');
  }
}
