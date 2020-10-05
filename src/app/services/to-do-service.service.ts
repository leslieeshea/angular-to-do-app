import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  // have to inject http module here to use it
  constructor(
    private http: HttpClient
  ) { }

  getToDoList() {
    return [
      {
      id: 1,
      title: 'To Do 1',
      completed: false
      },
      {
      id: 2,
      title: 'To Do 2',
      completed: true
      },
      {
      id: 3,
      title: 'To Do 3',
      completed: false
      }
    ]
  }
}
