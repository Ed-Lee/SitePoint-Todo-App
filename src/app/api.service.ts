import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {


  constructor(
    private http: HttpClient
  ) { }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/todos`)
      .pipe(
        map(todos => todos.map(todo => new Todo(todo))),
        catchError(this.handleError)
      );
  }



  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/todos`, todo)
      .pipe(
        map(todo =>  new Todo(todo)),
        catchError(this.handleError)
      );
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todos/${todoId}`)
      .pipe(
        map(todo =>  new Todo(todo)),
        catchError(this.handleError)
      );
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/todos/${todo.id}`, todo)
      .pipe(
        map(todo =>  new Todo(todo)),
        catchError(this.handleError)
      );
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number):Observable<null> {
    return this.http.delete<Todo>(`${API_URL}/todos/${todoId}`)
      .pipe(
        map(todo =>  null),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
