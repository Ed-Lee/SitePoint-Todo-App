# TodoApp

這是 SitePoint - Building a todo App with Angular CLI 的一系列程式碼練習

1. Part 1 - Getting out first version of the Todo Application up and running

  在這個部分資料取得利用TodoDataService, 需要注意其注入的Scope，另外還有getter的使用
  
  a. ng new todo-app 起始一個專案
  b. 建立Todo, TodoDataService
  c. 修改app.component.ts, app.component.css, app.component.html
  d. 部署到GitHub Pages :
>   	ng build --prod --base-href "https://Ed-Lee.github.io/SitePoint-Todo-App/"
> 		ngh


2. Part 2 - Creating separate components to display a list of todos and a single todo

  在這個部分只要是將原本AppComponent切分成幾個組件，學習組件之間的溝通，靠@Input(), @Output()

  
  	
  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).