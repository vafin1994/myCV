import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ResumeService} from './services/resume-service';
import {JsonPipe} from '@angular/common';
import {Resume} from './models/resume.interface';
import {Main} from './sections/main/main';
import {NavBar} from './sections/nav-bar/nav-bar';
import {About} from './sections/about/about';

@Component({
  selector: 'app-root',
  imports: [
    JsonPipe,
    Main,
    NavBar,
    About
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private resumeService = inject(ResumeService);
  public resume: WritableSignal<Resume | null> = signal(null);

  protected readonly title = signal('myCV');

  ngOnInit() {
    this.getResumeJson();
  }

  private getResumeJson() {
    this.resumeService.getResume().subscribe(
      (resume: Resume) => {
        this.resume.set(resume);
      }
    )
  }
}
