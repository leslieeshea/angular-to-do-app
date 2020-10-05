import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor() { }

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
