import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  {
    path:'', //TODO: http://localhost:4200/
    component: TestComponentComponent
  },
  {
    path:'test-route',
    component: TestComponentComponent
  },
  {
    path: '**',
    redirectTo: '/test-route'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
