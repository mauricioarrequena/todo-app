import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly _URL = 'http://localhost:5285/tasks';
  private http = inject(HttpClient);

  constructor() {}

  post(title: string, description: string) {
    return this.http.post(`${this._URL}`, {
      title: title,
      description: description,
    });
  }
}
