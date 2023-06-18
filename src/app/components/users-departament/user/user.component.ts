import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgOptimizedImage } from '@angular/common';
import { GeneralService } from '../../services/general.service';
import { UsersService } from './../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IDepartament } from 'src/app/models/departament.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    public readonly generalService: GeneralService,
    private readonly usersService: UsersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  @Input() user?: User;
  @Input() index: number = 0;
  @Input() companys: Observable<IDepartament[]>;
  public userform!: FormGroup;
  public editMode: boolean = false;

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      email: [this.user?.email, [Validators.required, Validators.email]],
      first_name: [
        this.user?.first_name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      last_name: [
        this.user?.last_name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      company: [this.user?.company, Validators.required],
      tel: [
        this.user?.tel,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ],
      ],
    });
  }

  public sendEdit(id: number) {
    this.editMode = false;
    this.route.params.subscribe((params) => {
      this.usersService.put(this.userform.value, id, params.id);
    });
  }

  public onEdit() {
    this.editMode = false;
  }

  public delete(id: number) {
    this.route.params.subscribe((params) => {
      this.usersService.delete(id, params.id);
    });
  }

  public get firstName(): FormControl {
    return this.userform.get('first_name') as FormControl;
  }

  public get lastName(): FormControl {
    return this.userform.get('last_name') as FormControl;
  }

  public get email(): FormControl {
    return this.userform.get('email') as FormControl;
  }

  public get company(): FormControl {
    return this.userform.get('company') as FormControl;
  }

  public get tel(): FormControl {
    return this.userform.get('tel') as FormControl;
  }
}
