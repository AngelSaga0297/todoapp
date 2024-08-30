import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from '@shared//shared.module';
import { LoginPageComponent } from './page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [   // SE DECLARAN LOS COMPONENTE, PIPES, DIRECTIVAS
    LoginPageComponent
  ],
  imports: [  //SE IMPORTAN OTROS MODULES
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
