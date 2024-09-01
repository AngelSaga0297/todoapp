import { Component, OnInit } from '@angular/core';
import { ReplaceSpacePipe } from '@shared//pipes/replace-space.pipe';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthTestService } from '../services/auth-test.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private replaceSpace: ReplaceSpacePipe,
     private authService:AuthTestService, private router:Router) {

   }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),

      }
    )

  }

  sendCredentials(): void {
    const body = this. loginForm.value;
    this.authService.submitLogin(body)
    .subscribe((response) => {
      this.router.navigate(['/','task'])
    })
    console.log(body)
  }

}
