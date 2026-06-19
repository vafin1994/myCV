import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  @Input() resume!: Resume;

  formatDate(date: string | undefined): string {
    if (!date) return 'Present';
    const [year, month] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }

  fluencyDots(fluency: string): boolean[] {
    const map: Record<string, number> = {
      'Native speaker': 5, 'Advanced': 4, 'Intermediate': 3, 'Elementary': 2, 'Beginner': 1,
    };
    const filled = map[fluency] ?? 3;
    return Array.from({length: 5}, (_, i) => i < filled);
  }
}
