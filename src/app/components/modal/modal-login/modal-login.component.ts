import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { GeneralService } from './../../services/general.service';
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
    private router: Router,
    private readonly generalService: GeneralService
  ) {}
  errorMessage: string = '';
  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  public login() {
    this.modalServiceService.postLogin(this.loginForms.value).subscribe(
      (res: IResponceLogin) => {
        this.errorMessage = '';
        this.modalServiceService.token = res.token;
        // this.modalServiceService.isLogged = true;
        localStorage.setItem('token', res.token);
        this.router.navigate(['company-dashboard']);
      },
      (error) => {
        this.loginForms.reset();
        this.errorMessage = error.error.message;
        // this.modalServiceService.isLogged = true;
      }
    );
  }
}
