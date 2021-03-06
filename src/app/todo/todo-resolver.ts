import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Injectable()
export class TodoResolver implements Resolve<Observable<Todo[]>> {

  constructor(private todoDataService: TodoDataService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Observable<Observable<Todo[]>> | Promise<Observable<Todo[]>> {
    return this.todoDataService.getAllTodos();
  }

}
