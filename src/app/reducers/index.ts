import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodoList from './todo-list.reducer';

export interface State {

  [fromTodoList.todoListFeatureKey]: fromTodoList.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTodoList.todoListFeatureKey]: fromTodoList.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
