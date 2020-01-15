import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { saveTodo } from '../actions/todo-list.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todo: Todo;

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.todo = {name: null};
  }

  submit() {
    this.store.dispatch(saveTodo({payload: this.todo}));
    this.router.navigateByUrl('/list');
  }

}
