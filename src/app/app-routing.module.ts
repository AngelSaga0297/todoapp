import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'one',
        component:HomeChildOneComponent
      },
      {
        path:'two',
        component:HomeChildTwoComponent
      }
    ]
  }


  // {
  //   path:'', //TODO: http://localhost:4200
  //   component: TestComponentComponent
  // },
  // {
  //   path:'test-route',
  //   component: TestComponentComponent
  // },
  // {
  //   path:'**',
  //    redirectTo: '/test-route'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
