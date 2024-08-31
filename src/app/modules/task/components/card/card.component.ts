import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked {

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

  ngAfterViewInit(): void {
    const elementTitle = this.elementRefId.nativeElement;
      this.render2.setStyle(elementTitle, 'color', 'red')
  }

  ngAfterViewChecked(): void {
      console.log('hola muindoooo')
  }

}
