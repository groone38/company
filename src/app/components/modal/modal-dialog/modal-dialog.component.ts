import { Component } from '@angular/core';
import { GeneralService } from './../../services/general.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from './../../services/users/users.service';
import { CompanyServiceService } from './../../services/company/company-service.service';
import { ActivatedRoute } from '@angular/router';
import { ICompony } from 'src/app/models/compony.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  constructor(
    public readonly generalService: GeneralService,
    private readonly usersService: UsersService,
    private readonly companyServiceService: CompanyServiceService,
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}
  public companys: Observable<ICompony[]>;
  public userForms!: FormGroup;
  public companyForms!: FormGroup;
  public toggle: boolean = true;
  ngOnInit(): void {
    this.companyServiceService.get();
    this.companys = this.companyServiceService.entities$;
    this.userForms = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
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
    this.companyForms = this.formBuilder.group({
      name_company: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  public createUser() {
    this.route.params.subscribe((params) => {
      this.usersService.post(this.userForms.value, params.id);
    });
    this.userForms.reset();
    this.generalService.showDialog = false;
  }

  public createCompany() {
    this.companyServiceService.create(this.companyForms.value);
    this.companyForms.reset();
    this.generalService.showDialog = false;
  }

  public get email(): FormControl {
    return this.userForms.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.userForms.get('password') as FormControl;
  }

  public get confirmPassword(): FormControl {
    return this.userForms.get('confirmPassword') as FormControl;
  }

  public get firstName(): FormControl {
    return this.userForms.get('first_name') as FormControl;
  }

  public get lastName(): FormControl {
    return this.userForms.get('last_name') as FormControl;
  }

  public get company(): FormControl {
    return this.userForms.get('company') as FormControl;
  }

  public get tel(): FormControl {
    return this.userForms.get('tel') as FormControl;
  }

  public get Company(): FormControl {
    return this.companyForms.get('name_company') as FormControl;
  }
}
