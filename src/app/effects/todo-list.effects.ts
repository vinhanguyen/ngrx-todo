import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoListActions from '../actions/todo-list.actions';
import { mergeMap, map, catchError, concatMap, switchMap } from 'rxjs/operators';
import { TodoListService } from '../services/todo-list.service';
import { of } from 'rxjs';



@Injectable()
export class TodoListEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListActions.loadTodos),
    mergeMap(() => this.todoListService.getAll().pipe(
      map(todos => TodoListActions.loadTodosSuccess({data: todos})),
      catchError(e => of(TodoListActions.loadTodosFailure({error: e})))
    ))
  ));

  loadTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListActions.loadTodo),
    switchMap((action) => this.todoListService.getById(action.data).pipe(
      map(todo => TodoListActions.loadTodoSuccess({data: todo})),
      catchError(e => of(TodoListActions.loadTodoFailure({error: e})))
    ))
  ));

  saveTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListActions.saveTodo),
    concatMap((action) => this.todoListService.saveTodo(action.data).pipe(
      map(() => TodoListActions.loadTodos()),
      catchError(e => of(TodoListActions.saveTodoFailure({error: e})))
    ))
  ));

  constructor(private actions$: Actions, private todoListService: TodoListService) {}

}
