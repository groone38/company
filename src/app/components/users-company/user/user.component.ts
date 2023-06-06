import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgOptimizedImage } from '@angular/common';
import { GeneralService } from '../../services/general.service';
import { UsersService } from './../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    public readonly generalService: GeneralService,
    private readonly usersService: UsersService,
    private route: ActivatedRoute
  ) {}
  @Input() user?: User;
  @Input() index: number = 0;

  public delete(id: number) {
    this.route.params.subscribe((params) => {
      this.usersService.delete(id, params.id);
    });
  }
}
