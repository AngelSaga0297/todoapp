import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginPageComponent } from './page/login-page.component';

const routes: Routes = [  //TODO: http://localhost/auth/
  {
    path:'login',
    component:RegisterFormComponent
  },
  {
    path:'register',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
