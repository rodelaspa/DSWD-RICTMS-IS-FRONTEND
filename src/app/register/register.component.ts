import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import  Validation  from '../shared/util/customvalidation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        middlename: ['', Validators.required],
        lastname: ['', Validators.required],
        contact_number: ['', [Validators.required, Validators.pattern(/^(09|\+639)\d{9}$/gm)]],
        email_address: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      }, {
        validators: [Validation.match('password', 'confirmPassword')]
      });
    }

  ngOnInit(): void {
    
  }

  get f() { return this.registerForm.controls; }


  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
