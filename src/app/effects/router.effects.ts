import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { map, tap, filter } from 'rxjs/operators';
import * as TodoListActions from '../actions/todo-list.actions';



@Injectable()
export class RouterEffects {

  routerNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(routerNavigationAction),
    map(action => action.payload),
    tap(payload => {
      console.log('payload', payload);
    }),
    filter(payload => payload.routerState.url.startsWith('/edit')),
    map(payload => payload.routerState.root.children.reduce((id: string, route) => route.paramMap.has('id') ? route.paramMap.get('id') : id, null)),
    map(id => TodoListActions.loadTodo({payload: parseInt(id)}))
  ));



  constructor(private actions$: Actions) {}

}
