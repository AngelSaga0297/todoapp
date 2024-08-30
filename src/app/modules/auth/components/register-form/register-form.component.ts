import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { AuthTestService } from '../../services/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthTestService) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup(
      {
        email: new FormControl('',{
          validators:[Validators.required, Validators.email],
          asyncValidators: this.authService.uniqueEmailValidator(),
          updateOn:'blur'
        }),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
        aboutMe: new FormControl('', [Validators.required, Validators.minLength(3)]),
      },
      {
        validators: passwordMatchValidator
      }
    )

    this.registerForm.valueChanges.subscribe((res) => {
      console.log('valor phone', res)
    })

  }

  testLoaded(): void{
    
    const mockData = {
      email: 'test@test.com',
      name: 'Angel',
      lastName: 'Sanchez',
      phone: '7777777777',
      aboutMe: 'Hola soy Angel developer'
    }

    this.registerForm.setValue(mockData)

  }

  testUploaded(): void{
    
    const mockData = {
      phone: '1',
    }

    this.registerForm.patchValue(mockData)

  }
}

  function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
    const valuePassword = formCurrent.get('password')?.value
    const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value
    return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true}
    // g.get('password')?.value === g.get('passwordConfirm')?.value
    //  ? null : {'mismatch': true};
  }

