import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TaskService } from '../services';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-agenda-task',
  templateUrl: './agenda-task.component.html',
  styleUrls: ['./agenda-task.component.scss']
})
export class AgendaTaskComponent implements OnInit {

  date: Boolean = false;

  @Input() tasks: Task[] = [];
  @Input() exibirData: Boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  done(task: Task, event: MatCheckboxChange){
      task.done = event.checked;
      this.taskService.alterTask(task.id, task).subscribe();

  }

  deleteTask(taskId :number | undefined){
    this.taskService.deleteTask(taskId).subscribe();
  }

}
