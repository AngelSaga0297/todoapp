import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared//services/test-course.service';

@Component({
  selector: 'app-header', //El tag que usas para llamar a este componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
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

  constructor(public testCourseService:TestCourseService) { }

  ngOnInit(): void {
    
  }

}
