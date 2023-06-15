import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgOptimizedImage } from '@angular/common';
import { GeneralService } from '../../services/general.service';
import { UsersService } from './../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  public userform!: FormGroup;
  public editMode: boolean = false;

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      email: [this.user?.email],
      first_name: [this.user?.first_name],
      last_name: [this.user?.last_name],
      company: [this.user?.company],
      tel: [this.user?.tel],
    });
  }

  public sendEdit(id: number) {
    this.editMode = false;
    this.route.params.subscribe((params) => {
      this.usersService.put(this.userform.value, id, params.id);
    });
  }

  public delete(id: number) {
    this.route.params.subscribe((params) => {
      this.usersService.delete(id, params.id);
    });
  }
}
