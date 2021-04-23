import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgendaTaskComponent } from './agenda-task/agenda-task.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core';
import { ListarTaskComponent } from './listar-task/listar-task.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgendaTaskComponent,
    DialogAddTaskComponent,
    ListarTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    CoreModule
  ],
  providers: [], //modulos injetados no provider apenas estará visivel para os componentes da declarations
  bootstrap: [AppComponent]
})
export class AppModule { }
