import {inject, Service } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resume} from '../models/resume.interface';


@Service()
export class ResumeService {
  private readonly http = inject(HttpClient);

  public getResume(): Observable<Resume> {
    return this.http.get<Resume>('/resources/resume.json');
  }
}
