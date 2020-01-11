import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction(
  '[TodoList] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[TodoList] Load Todos Success',
  props<{ data: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load Todos Failure',
  props<{ error: any }>()
);

export const createTodo = createAction(
  '[TodoList] Create Todo',
  props<{ data: Todo }>()
);

export const createTodoFailure = createAction(
  '[TodoList] Create Todo Failure',
  props<{ error: any }>()
);