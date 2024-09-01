import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  case:number = 5800;

  groups:Array<any> = [];
  groups$ = this.taskService.getTask();
  listObservables$:Array<Subscription> = [];

  constructor(private taskService:TaskService) { }

  // listUser:Array<{id:string, name:string}> = [
  //   {
  //     id: '1',
  //     name:"Juan"
  //   },
  //   {
  //     id: '2',
  //     name:"Mario"
  //   },    
  //   {
  //     id: '3',
  //     name:"Sergio"
  //   },
  // ]

  //SOY EL INIT
  ngOnInit(): void {

    // this.taskService.getTask()
    // .subscribe((response) => {
      
    //   const {data} = response;
    //   this.groups = data;

    //   console.log('---> ', response)
    // },(err) => {
    //   console.log('Error', err)
    // })


    // const observer1$ = interval(1000).subscribe((res) => {
    //   console.log('👌 Llamando');
    // })

    // this.listObservables$ = [observer1$];

  }

  ngOnDestroy(): void {
    console.log('Me voy a destruir 💥')
      this.listObservables$.forEach((subscriptons) => subscriptons.unsubscribe())
  }

}
