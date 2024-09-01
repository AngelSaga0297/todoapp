import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { delay, map, of, Observable, tap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  private URL = environment.api;

  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  submitLogin(credentials:{email:string, password:string}):Observable<any>{
    return this.httpClient.post(`${this.URL}/auth/login`, 
    credentials)
    .pipe(
      tap((stream:any)  => {
        const {tokenSession} = stream;
        this.cookieService.put('token_session', tokenSession,{
          path:"/"
        })
      }),
      catchError(() => {
        console.log('Algo ocurrio fijate')
        return of([])
      })
    )
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value)
      .pipe(
        delay(1500),
        map((email) => {
          const emails = ['test@test.com', 'hola@gmail.com'];
          return emails.includes(email);//TODO true | false
        })
      ).pipe(
        map((exists) => (exists ? { emailExists: true } : null))
      );
    };
  }
}
