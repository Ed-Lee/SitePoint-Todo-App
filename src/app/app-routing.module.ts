import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoResolver } from './todo/todo-resolver';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: 'todos', component: TodoComponent, resolve: {
      todos: TodoResolver
    }
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [TodoResolver]
})
export class AppRoutingModule {
}
