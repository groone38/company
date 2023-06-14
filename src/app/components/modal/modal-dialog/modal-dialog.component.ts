import { Component } from '@angular/core';
import { GeneralService } from './../../services/general.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from './../../services/users/users.service';
import { CompanyServiceService } from './../../services/company/company-service.service';
import { ActivatedRoute } from '@angular/router';

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
  public userForms!: FormGroup;
  public companyForms!: FormGroup;
  public toggle: boolean = true;
  ngOnInit(): void {
    this.userForms = this.formBuilder.group({
      email: [''],
      password: [''],
      first_name: [''],
      last_name: [''],
      company: [''],
      tel: [''],
    });
    this.companyForms = this.formBuilder.group({
      name_company: [''],
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
}
