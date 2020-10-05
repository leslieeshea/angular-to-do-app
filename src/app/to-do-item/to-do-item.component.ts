import { Component, OnInit, Input } from '@angular/core';

import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
