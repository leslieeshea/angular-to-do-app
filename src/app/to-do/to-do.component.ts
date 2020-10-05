import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  constructor() {
    todos: [ToDo];
  }

  ngOnInit() {

  }
}
