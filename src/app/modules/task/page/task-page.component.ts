import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  case:number = 5800;

  constructor() { }

  results:Array<string> = [
  ]
  resultsFiltered:Array<string> = [
    'Holaaa'
  ]  
  resultsUpdated:Array<string> = [
  ]
  ngOnInit(): void {
  }

}
