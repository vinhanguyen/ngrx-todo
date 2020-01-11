import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import * as TodoListActions from '../actions/todo-list.actions';
import produce from 'immer';


export const todoListFeatureKey = 'todoList';

export interface State {
  loading: boolean,
  todos: Todo[]
}

export const initialState: State = {
  loading: false,
  todos: []
};

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.loadTodos, state => produce(state, draft => {
    draft.loading = true;
    draft.todos = [];
  })),
  on(TodoListActions.loadTodosSuccess, (state, {data}) => produce(state, draft => {
    draft.loading = false;
    draft.todos = data;
  })),
  on(TodoListActions.loadTodosFailure, state => produce(state, draft => {
    draft.loading = false;
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoListReducer(state, action);
}
