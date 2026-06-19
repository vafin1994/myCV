import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  @Input() resume!: Resume;
}
