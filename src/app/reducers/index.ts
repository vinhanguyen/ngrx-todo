import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodoList from './todo-list.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {

  [fromTodoList.todoListFeatureKey]: fromTodoList.State;
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {

  [fromTodoList.todoListFeatureKey]: fromTodoList.reducer,
  router: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectTodoList = createFeatureSelector<State, fromTodoList.State>(fromTodoList.todoListFeatureKey);
export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState<any>>('router');

export const {
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl
} = fromRouter.getSelectors(selectRouter);