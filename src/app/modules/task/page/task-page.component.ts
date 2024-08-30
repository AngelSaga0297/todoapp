import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  showText = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeText(): void {
    this.showText = !this.showText;
  }

}
