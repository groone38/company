import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users/users.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-users-company',
  templateUrl: './users-company.component.html',
  styleUrls: ['./users-company.component.scss'],
})
export class UsersCompanyComponent implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private route: ActivatedRoute
  ) {}
  users: User[] = [];
  searchText: string = '';

  public getUsers(id: string) {
    this.usersService
      .get(id)
      .subscribe((users: User[]) => (this.users = users));
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getUsers(params.id);
    });
  }
}
