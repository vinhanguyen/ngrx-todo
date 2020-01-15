import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';


const routes: Routes = [
  {path: 'list', component: ListTodoComponent},
  {path: 'edit/:id', component: EditTodoComponent},
  {path: 'create', component: CreateTodoComponent},
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
