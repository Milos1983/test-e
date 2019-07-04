import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(
    private _router: Router,
    private user:UserService,
    fb: FormBuilder) {
    this.registerForm = fb.group({
      'firstName' : [null,  Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      'email': [null,  Validators.required],
      'password': [null,  Validators.required]
    })
    this.registerForm.valueChanges.subscribe( (form: any) => {}
    );
  }

  submitForm(){
    this.user.setUserLoggedIn();
    this._router.navigate(['profile']);
  }

}
