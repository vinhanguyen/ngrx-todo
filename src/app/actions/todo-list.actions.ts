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
  '[TodoList] Create Todo'
);

export const loadTodo = createAction(
  '[TodoList] Load Todo',
  props<{ data: number }>()
);

export const loadTodoSuccess = createAction(
  '[TodoList] Load Todo Success',
  props<{ data: Todo }>()
);

export const loadTodoFailure = createAction(
  '[TodoList] Load Todo Failure',
  props<{ error: any }>()
);

export const saveTodo = createAction(
  '[TodoList] Save Todo',
  props<{ data: Todo }>()
);

export const saveTodoFailure = createAction(
  '[TodoList] Save Todo Failure',
  props<{ error: any }>()
);