import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`).pipe(
      delay(1000)
    );
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`).pipe(
      delay(1000)
    );
  }

  saveTodo(todo: Todo): Observable<Todo> {
    if (todo.id) {
      return this.http.put<Todo>(`${this.baseUrl}/todos/${todo.id}`, todo);
    } else {
      return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
    }
  }
}
