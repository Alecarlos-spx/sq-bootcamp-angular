import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyTasks';

  constructor(public dialog: MatDialog) {}

    public openDialog() {
      //const dialogRef =
      this.dialog.open(DialogAddTaskComponent, {minWidth: '50%'});

      //dialogRef.afterClosed().subscribe(result => {
      //  console.log(`Dialog result: ${result}`);
     // });
    }



}
