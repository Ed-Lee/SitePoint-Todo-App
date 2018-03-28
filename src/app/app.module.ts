import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { FormsModule } from '@angular/forms';
import { DiTestComponent } from './di-test/di-test.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DiTestComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoDataService], //在這裡宣告表示singleton所有的組件共享這個instance
  bootstrap: [AppComponent]
})
export class AppModule { }
