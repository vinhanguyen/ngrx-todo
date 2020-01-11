import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import * as _ from 'lodash';
import * as TodoListActions from '../actions/todo-list.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.loading$ = this.store.select(state => state.todoList.loading);
    this.store.select(state => state.todoList.todo).subscribe(todo => {
      this.todo = _.cloneDeep(todo);
    });
  }

  submit() {
    this.store.dispatch(TodoListActions.saveTodo({data: this.todo}));
    this.router.navigateByUrl('/');
  }

}
