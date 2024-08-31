import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared//services/test-course.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []


  private colors = ['red', 'blue', 'green'];
  private colorIndex = 0;

  constructor(private testCourseService:TestCourseService) { 

  }

  ngOnInit(): void {

  } 

  sendData():void{
    this.testCourseService.setData("Hola desde card 😊")
  }

}
