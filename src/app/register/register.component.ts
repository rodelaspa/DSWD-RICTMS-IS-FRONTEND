import { Component, OnInit,  } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import Validation from '../shared/util/validation';
import { PasswordStrengthValidator } from '../shared/util/password-strength.validators';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  submitted = false;
  password: any = 'password';
  show: any = false;
  token: string|undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service,
    private formBuilder: FormBuilder) { 
      this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        middlename: [''],
        lastname: ['', Validators.required],
        position: ['', Validators.required],
        obsu: ['', Validators.required],
        designation: [''],
        contact_number: ['', [Validators.required, Validators.pattern(/^(09|\+639)\d{9}$/gm)]],
        email_address: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator]],
        confirm_password: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },{
        validators: [Validation.match('password', 'confirm_password')],
      });

      this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
        console.log(`Token [${token}] generated`);
        this.token = token;
      });
    }

  ngOnInit(): void {
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
