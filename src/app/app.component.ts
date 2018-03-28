import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "./todo-data.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.todoDataService.getAllTodos()
      .subscribe(todos => this.todos = todos);
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo)
      .subscribe(newTodo => this.todos = this.todos.concat(newTodo));
  }

  onToggleTodo(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo)
      .subscribe(updateTodo => todo = updateTodo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id)
      .subscribe(() => this.todos = this.todos.filter(
        t => t.id !== todo.id
      ));
  }





}
