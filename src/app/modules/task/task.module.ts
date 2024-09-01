import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '@shared//shared.module';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent,
    ColumnComponent,
    CardComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
