import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import {
  IResponceLogin,
  ModalServiceService,
} from '../../services/modal/modal-service.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  public loginForms!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly modalServiceService: ModalServiceService,
    private router: Router
  ) {}
  errorMessage: string = '';
  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  public login() {
    this.modalServiceService.postLogin(this.loginForms.value).subscribe(
      (res: IResponceLogin) => {
        this.errorMessage = '';
        this.modalServiceService.token = res.token;
        localStorage.setItem('token', res.token);
        this.router.navigate(['company-dashboard']);
      },
      (error) => {
        this.loginForms.reset();
        this.errorMessage = error.error.message;
      }
    );
  }

  public get email(): FormControl {
    return this.loginForms.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForms.get('password') as FormControl;
  }
}
