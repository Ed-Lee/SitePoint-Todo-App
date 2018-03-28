import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data['todos'])
    ).subscribe(
      todos => this.todos = todos
    )
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
