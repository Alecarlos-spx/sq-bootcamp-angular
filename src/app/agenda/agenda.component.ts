import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {


  tarefasParaHoje : Task[] = [];
  tarefasParaAmanha : Task[] = [];
  tarefasParaOsProximosDias : Task[] = [];

  //tarefas: string[] = ['tarefa 1', 'tarefa 2', 'tarefa 3', 'tarefa 4'];

  // Listatarefas: Task[] = [
  //   new Task('Tarefa 1', '', new Date('04/16/2021')),
  //   new Task('Tarefa 2', '', new Date('04/12/2021')),
  //   new Task('Tarefa 3', '', new Date('04/11/2021')),
  //   new Task('Tarefa 4', '', new Date('04/15/2021'))
  // ]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.init();
    });

   this.init();
  }

  private init(){
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  private listTasksForToday(){
    this.taskService.listTasksForToday().subscribe(
      (tarefas: Task[]) => {

        this.tarefasParaHoje = tarefas;
      }
    );
  }

  private listTasksForTomorrow(){
    this.taskService.listTasksForTomorrow().subscribe(
      (tarefas: Task[]) => {

        this.tarefasParaAmanha = tarefas;
      }
    );
  }

  private listUpcomingTasks(){
    this.taskService.listUpcomingTasks().subscribe(
      (tarefas: Task[]) => {

        this.tarefasParaOsProximosDias = tarefas;
      }
    );
  }


}
