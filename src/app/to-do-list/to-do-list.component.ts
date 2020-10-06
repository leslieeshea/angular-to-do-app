import { Component, OnInit } from '@angular/core';

import { ToDo } from '../models/ToDo';
import { ToDoService } from '../services/to-do-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: ToDo[];

  // this is where you inject your services
  // the name of your service on line 17 doesn't matter. you just bind it to the service class name
  constructor(
    private todoService: ToDoService
  ) { }

  // now you can use the service by dot notating
  ngOnInit() {
    this.todoService.getToDoList().subscribe(data => { // subscribe is similar to a .then in a promise
      this.todos = data; // setting the data (list of to dos from api) to the to dos array
    });
  }

  deleteToDo(todo: ToDo) {
    // removes to do item from UI
    this.todos = this.todos.filter(t => t.id !== todo.id) // return all the todos that don't have this id
    // removes to do item from server
    this.todoService.deleteToDo(todo).subscribe();
  }

  addToDo(todo: ToDo) {
    this.todoService.addToDo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
