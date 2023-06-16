import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users/users.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ICompony } from 'src/app/models/compony.model';
import { CompanyServiceService } from '../services/company/company-service.service';

@Component({
  selector: 'app-users-company',
  templateUrl: './users-company.component.html',
  styleUrls: ['./users-company.component.scss'],
})
export class UsersCompanyComponent implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly companyServiceService: CompanyServiceService,
    private route: ActivatedRoute
  ) {}

  searchText: string = '';
  public users$: Observable<User[]>;
  public companys$: Observable<ICompony[]>;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.usersService.get(params.id);
      this.users$ = this.usersService.entities$;
    });
    this.companyServiceService.get();
    this.companys$ = this.companyServiceService.entities$;
    // console.log(this.companys);
  }
}
