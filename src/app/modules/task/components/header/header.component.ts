import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header', //El tag que usas para llamar a este componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  
  @ViewChild('title') elementRefId:ElementRef = new ElementRef('hola')

  private colors = ['red', 'blue', 'green'];
  private colorIndex = 0;

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Link',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(private render2:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // const elementTitle = this.elementRefId.nativeElement;
    
    // setInterval(() => {
    //   this.render2.setStyle(elementTitle, 'color', this.colors[this.colorIndex]);
    //   this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    // }, 100); // Cambia el color cada 1000 ms (1 segundo)
  }
}
