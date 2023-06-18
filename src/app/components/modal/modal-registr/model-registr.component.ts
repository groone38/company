import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';

@Component({
  selector: 'app-model-registr',
  templateUrl: './model-registr.component.html',
  styleUrls: ['./model-registr.component.scss'],
})
export class ModelRegistrComponent implements OnInit {
  public singupForms!: FormGroup;
  public errorMessage: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private readonly modalServiceService: ModalServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.singupForms = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      company: ['', Validators.required],
      tel: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ],
      ],
    });
  }

  public singUp() {
    this.modalServiceService.postRegistr(this.singupForms.value).subscribe(
      () => {
        this.singupForms.reset();
        this.router.navigate(['login']);
      },
      (error) => {
        this.singupForms.reset();
        this.errorMessage = error.error.message;
      }
    );
  }

  public get email(): FormControl {
    return this.singupForms.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.singupForms.get('password') as FormControl;
  }

  public get confirmPassword(): FormControl {
    return this.singupForms.get('confirmPassword') as FormControl;
  }

  public get firstName(): FormControl {
    return this.singupForms.get('first_name') as FormControl;
  }

  public get lastName(): FormControl {
    return this.singupForms.get('last_name') as FormControl;
  }

  public get company(): FormControl {
    return this.singupForms.get('company') as FormControl;
  }

  public get tel(): FormControl {
    return this.singupForms.get('tel') as FormControl;
  }
}
