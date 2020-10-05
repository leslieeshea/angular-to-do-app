import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos: ToDo[];

  constructor() {

  }

  ngOnInit() {
    this.todos = [
      {
      id: 1,
      title: 'To Do 1',
      completed: false
      }
    ]
  }
}
