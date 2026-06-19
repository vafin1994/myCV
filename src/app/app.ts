import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ResumeService} from './services/resume-service';
import {Resume} from './models/resume.interface';
import {Main} from './sections/main/main';
import {NavBar} from './sections/nav-bar/nav-bar';
import {About} from './sections/about/about';
import {Skills} from './sections/skills/skills';
import {Experience} from './sections/experience/experience';
import {Contact} from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Main,
    NavBar,
    About,
    Skills,
    Experience,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private resumeService = inject(ResumeService);
  public resume: WritableSignal<Resume | null> = signal(null);

  ngOnInit() {
    this.resumeService.getResume().subscribe(
      (resume: Resume) => this.resume.set(resume)
    );
  }
}
