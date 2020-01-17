import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import * as TodoListActions from '../actions/todo-list.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  columns = ['id', 'name'];

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.loading$ = this.store.select(state => state.todoList.loading);
    this.todos$ = this.store.select(state => state.todoList.todos);

    this.store.dispatch(TodoListActions.loadTodos());
  }

  create() {
    this.store.dispatch(TodoListActions.createTodo());
    this.router.navigateByUrl('/form');
  }

}
