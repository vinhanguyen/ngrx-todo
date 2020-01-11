import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import * as TodoListActions from '../actions/todo-list.actions';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  input = new FormControl('');

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.loading$ = this.store.select(state => state.todoList.loading);
    this.todos$ = this.store.select(state => state.todoList.todos);

    this.store.dispatch(TodoListActions.loadTodos());
  }

  create() {
    this.store.dispatch(TodoListActions.createTodo({data: {name: this.input.value}}));
    this.input.reset();
  }

}
