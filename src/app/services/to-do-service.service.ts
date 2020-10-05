import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToDo } from '../models/ToDo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  // toggle completed
  toggleCompleted(todo: ToDo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions); // sending data back to url with specific to do id and what type of data
  }

  // delete to do item
  deleteToDo(todo: ToDo): Observable<ToDo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ToDo>(url, httpOptions); // sending back data of which to do item to delete
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.todosUrl, todo, httpOptions);
  }
}
