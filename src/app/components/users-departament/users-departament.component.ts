import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IDepartament } from 'src/app/models/departament.model';
import { DepartamentService } from '../services/company/departament-service.service';

@Component({
  selector: 'app-users-company',
  templateUrl: './users-departament.component.html',
  styleUrls: ['./users-departament.component.scss'],
})
export class UsersDepartamentComponent implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly departamentService: DepartamentService,
    private route: ActivatedRoute
  ) {}

  searchText: string = '';
  public users$: Observable<User[]>;
  public companys$: Observable<IDepartament[]>;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.usersService.get(params.id);
      this.users$ = this.usersService.entities$;
    });
    this.departamentService.get();
    this.companys$ = this.departamentService.entities$;
    // console.log(this.companys);
  }
}
