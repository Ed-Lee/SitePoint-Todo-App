import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  @Output() add: EventEmitter<Todo> =  new EventEmitter();

  newTodo: Todo = new Todo();
  constructor() {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  ngOnInit() {
  }

}
