import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ResumeService} from './services/resume-service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    JsonPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private resumeService = inject(ResumeService);
  public resume: WritableSignal<JSON | null> = signal(null);

  protected readonly title = signal('myCV');

  ngOnInit() {
    this.getResumeJson();
  }

  private getResumeJson() {
    this.resumeService.getResume().subscribe(
      resume => {
        this.resume.set(resume);
      }
    )
  }
}
