import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from './models/task.model';
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
}) //{providedIn: 'root'} fica visivel para todos os componentes, fica em escopo global
export class TaskService {
  private updateTasks$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  public onUpdateTasks(): Observable<void>{
    return this.updateTasks$;
  }

public createTask(task: Task) : Observable<void>{
  return this.http.post<void>('localhost:4200/tasks', task)
  .pipe(
    finalize(() => this.updateTasks$.next())   );
}

public listarAllTasks(): Observable<Task[]>{
  return this.http.get<Task[]>('localhost:4200/tasks');
}

public listTasksForToday() : Observable<Task[]>{
  return this.http.get<Task[]>('localhost:4200/tasks/today');
}

public listTasksForTomorrow() : Observable<Task[]>{
  return this.http.get<Task[]>('localhost:4200/tasks/tomorrow');
}

public listUpcomingTasks() : Observable<Task[]>{
  return this.http.get<Task[]>('localhost:4200/tasks/upcoming');
}

public alterTask(taskId: number | undefined, task: Task) : Observable<void>{
  return this.http.put<void>(`localhost:4200/tasks/${taskId}`, task).pipe(
    finalize(() => this.updateTasks$.next())
  );
}

public deleteTask(taskId: number | undefined): Observable<void>{
  return this.http.delete<void>(`localhost:4200/tasks/${taskId}`).pipe(
    finalize(() => this.updateTasks$.next())
  );
}
}



