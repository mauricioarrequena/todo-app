import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedAddTaskService {
  openAddSource = new Subject<boolean>();   
  openAdd$ = this.openAddSource.asObservable();

  openAddTask()
  {
    this.openAddSource.next(true);
  }
}
