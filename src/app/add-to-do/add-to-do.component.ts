import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})

export class AddToDoComponent implements OnInit {
  @Output() addToDo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addToDo.emit(todo);
  }
}
