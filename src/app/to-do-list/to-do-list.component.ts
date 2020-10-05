import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: ToDo[];

  constructor() {

  }

  ngOnInit() {
    this.todos = [
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
