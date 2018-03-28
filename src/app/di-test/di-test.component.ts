import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-di-test',
  templateUrl: './di-test.component.html',
  styleUrls: ['./di-test.component.css'],
  providers: [TodoDataService] //注意宣告的地方，在這裡表示該service的instance不與別的組件共享
})
export class DiTestComponent implements OnInit {

  get todos(): Todo[] {
    console.log('用getter的方式要小心，因為變更偵測所以會自動被執行多次');
    return this.service.getAllTodos();
  }

  constructor(private service: TodoDataService) {
  }

  ngOnInit() {
  }

}
