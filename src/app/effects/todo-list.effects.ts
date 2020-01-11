import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoListActions from '../actions/todo-list.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TodoListService } from '../services/todo-list.service';
import { of } from 'rxjs';



@Injectable()
export class TodoListEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListActions.loadTodos),
    mergeMap(() => this.todoListService.getTodos().pipe(
      map(todos => TodoListActions.loadTodosSuccess({data: todos})),
      catchError(e => of(TodoListActions.loadTodosFailure({error: e})))
    ))
  ));

  createTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListActions.createTodo),
    mergeMap((action) => this.todoListService.saveTodo(action.data).pipe(
      map(() => TodoListActions.loadTodos()),
      catchError(e => of(TodoListActions.createTodoFailure({error: e})))
    ))
  ));

  constructor(private actions$: Actions, private todoListService: TodoListService) {}

}
