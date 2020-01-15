import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import * as TodoListActions from '../actions/todo-list.actions';
import produce from 'immer';


export const todoListFeatureKey = 'todoList';

export interface State {
  loading: boolean,
  todos: Todo[],
  todo: Todo
}

export const initialState: State = {
  loading: false,
  todos: [],
  todo: null
};

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.loadTodos, state => produce(state, draft => {
    draft.loading = true;
    draft.todos = [];
  })),
  on(TodoListActions.loadTodosSuccess, (state, {payload}) => produce(state, draft => {
    draft.loading = false;
    draft.todos = payload;
  })),
  on(TodoListActions.loadTodosFailure, state => produce(state, draft => {
    draft.loading = false;
  })),
  on(TodoListActions.loadTodo, state => produce(state, draft => {
    draft.loading = true;
    draft.todo = null;
  })),
  on(TodoListActions.loadTodoSuccess, (state, {payload}) => produce(state, draft => {
    draft.loading = false;
    draft.todo = payload;
  })),
  on(TodoListActions.loadTodoFailure, state => produce(state, draft => {
    draft.loading = false;
  })),
  on(TodoListActions.createTodo, state => produce(state, draft => {
    draft.todo = {name: ''}
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoListReducer(state, action);
}
