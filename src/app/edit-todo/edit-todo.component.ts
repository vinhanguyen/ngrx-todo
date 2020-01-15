import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as _ from 'lodash';
import { saveTodo } from '../actions/todo-list.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todo: Todo;

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.store.select(state => state.todoList.todo).subscribe(todo => {
      this.todo = _.cloneDeep(todo);
    });
  }

  submit() {
    this.store.dispatch(saveTodo({payload: this.todo}));
    this.router.navigateByUrl('/list');
  }

}
