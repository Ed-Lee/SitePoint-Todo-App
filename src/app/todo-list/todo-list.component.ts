import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodo(todo: Todo) {
    this.toggle.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }



}
