import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
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
    let dataAtual = new Date().setHours(0, 0, 0, 0);
    this.taskService.listarAllTasks().subscribe((taskLista: Task[]) => {

      this.tasksListarTodas = taskLista;
      // .filter((data: Task) => {
      //   console.log("data criação", +new Date(data.createdAt).setHours(0, 0, 0, 0));
      //   console.log("data de hoje", dataAtual);
      //   data.createdAt &&
      //   (+new Date(data.createdAt).setHours(0, 0, 0, 0) <= +dataAtual) } );
    }
    );
  }


}
