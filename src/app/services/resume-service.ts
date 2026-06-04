import {inject, Service } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Service()
export class ResumeService {
  private readonly http = inject(HttpClient);

  public getResume(): Observable<JSON> {
    return this.http.get<JSON>('/resources/resume.json');
  }
}
