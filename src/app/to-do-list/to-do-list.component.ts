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
  // the name of your service on line 18 doesn't matter. you just bind it to the service class name
  constructor(
    private todoService: ToDoService
  ) {

  }

  // now you can use the service by dot notating
  ngOnInit() {
    this.todoService.getToDoList().subscribe(todos => { // subscribe is similar to a .then in a promise
      this.todos = todos; // setting the to dos to be rendered to ones that are returned from api
    });
  }

  deleteToDo(todo: ToDo) {
    this.todos = this.todos.filter(t => t.id !== todo.id) // return all the todos that don't have this id
    
  }
}
