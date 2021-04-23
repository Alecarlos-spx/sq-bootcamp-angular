import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models';

@Component({
  selector: 'app-listar-task',
  templateUrl: './listar-task.component.html',
  styleUrls: ['./listar-task.component.scss']
})
export class ListarTaskComponent implements OnInit {

  tasksListarTodas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.listarAllTasks();
    });
    this.listarAllTasks();
  }

  listarAllTasks(){
    this.taskService.listarAllTasks().subscribe((taskLista: Task[]) => {
      this.tasksListarTodas = taskLista;
    }
    );
  }


}
