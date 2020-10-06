import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ToDo } from '../models/ToDo';
import { ToDoService } from '../services/to-do-service.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() deleteToDo: EventEmitter<ToDo> = new EventEmitter();

  constructor(
    private todoService: ToDoService
  ) { }

  ngOnInit(): void {

  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed // this todo is tied to the todo item that is being passed in from the input
    }

    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed; // if it's true, set it to false, and if it's false, set it to true

    // toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    this.deleteToDo.emit(todo);
  }
}
