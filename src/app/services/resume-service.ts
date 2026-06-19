import {inject, Service} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resume} from '../models/resume.interface';

@Service()
export class ResumeService {
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);

  public getResume(): Observable<Resume> {
    return this.http.get<Resume>(this.document.baseURI + 'resources/resume.json');
  }
}
