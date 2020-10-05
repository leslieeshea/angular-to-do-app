import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10'

  // have to inject http module here to use it
  constructor(
    private http: HttpClient
  ) { }

  //will return an observable
  getToDoList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.todosUrl}${this.todosLimit}`); // make get request to api
  }
}
