import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggle.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
