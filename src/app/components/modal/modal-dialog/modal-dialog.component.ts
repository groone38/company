import { Component } from '@angular/core';
import { GeneralService } from './../../services/general.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from './../../services/users/users.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  constructor(
    public readonly generalService: GeneralService,
    private readonly usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}
  public createForms!: FormGroup;
  ngOnInit(): void {
    this.createForms = this.formBuilder.group({
      email: [''],
      password: [''],
      first_name: [''],
      last_name: [''],
      company: [''],
      tel: [''],
    });
  }

  public create() {
    this.usersService.post(this.createForms.value).subscribe(() => {
      this.createForms.reset();
      this.generalService.showDialog = false;
    });
  }
}
