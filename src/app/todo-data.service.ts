import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor(private api: ApiService) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Observable<Todo> {
    return this.getTodoById(id);
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
