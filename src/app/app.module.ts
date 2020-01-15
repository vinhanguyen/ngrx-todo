import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TodoListEffects } from './effects/todo-list.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './effects/router.effects';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    EditTodoComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([TodoListEffects, RouterEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
