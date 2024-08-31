import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('hola')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
