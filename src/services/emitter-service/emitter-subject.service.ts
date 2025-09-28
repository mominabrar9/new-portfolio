import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterSubjectService {

  private dataSubject = new BehaviorSubject<any>(0);
  data$ = this.dataSubject.asObservable();

  updateData(newValue: any) {
    this.dataSubject.next(newValue);
  }

}
