import {Component, Input} from '@angular/core';
import {Resume} from '../../models/resume.interface';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @Input() resume!: Resume;

  get linkedIn() {
    return this.resume.basics.profiles.find(p => p.network === 'LinkedIn');
  }

  get phoneHref(): string {
    return 'tel:' + this.resume.basics.phone.replace(/\s/g, '');
  }

  get mapsHref(): string {
    return 'https://maps.google.com/?q=' + encodeURIComponent(this.resume.basics.location.city);
  }
}
