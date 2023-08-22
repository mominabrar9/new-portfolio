import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private url: string = 'http://abrarmomin.one:4201/api/inccount';

  constructor(private http: HttpClient) {
  }

  public trackPageViews(): Observable<number> {
    return this.http.post<number>(this.url, {});
  }
}
