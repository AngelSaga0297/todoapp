import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  case:number = 5800;

  constructor() { }

  listUser:Array<{id:string, name:string}> = [
    {
      id: '1',
      name:"Juan"
    },
    {
      id: '2',
      name:"Mario"
    },    
    {
      id: '3',
      name:"Sergio"
    },
  ]

  ngOnInit(): void {
  }

}
