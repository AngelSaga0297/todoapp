import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit, 
  AfterViewChecked, DoCheck, OnChanges {

  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []


  private colors = ['red', 'blue', 'green'];
  private colorIndex = 0;

  constructor(private render2:Renderer2) { 

  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.idOrder = Date.now()
    })
  } 

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngDoCheck(): void {
      // console.log('Hola soy el DoCheck')
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {
  }

}
