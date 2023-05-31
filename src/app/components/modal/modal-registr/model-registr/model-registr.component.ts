import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';

@Component({
  selector: 'app-model-registr',
  templateUrl: './model-registr.component.html',
  styleUrls: ['./model-registr.component.scss'],
})
export class ModelRegistrComponent implements OnInit {
  public singupForms!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly modalServiceService: ModalServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.singupForms = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      first_name: [''],
      last_name: [''],
      company: [''],
      tel: [''],
      boss: [''],
    });
  }

  public singUp() {
    this.modalServiceService
      .postRegistr(this.singupForms.value)
      .subscribe(() => {
        this.singupForms.reset();
        this.router.navigate(['login']);
      });
  }
}
