import { Component, EventEmitter, OnInit } from '@angular/core';
import { CompanyServiceService } from './../services/company/company-service.service';
import { ICompony } from 'src/app/models/compony.model';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss'],
})
export class CompanyDashboardComponent implements OnInit {
  constructor(private readonly companyServiceService: CompanyServiceService) {}
  companys: ICompony[] = [];
  searchText: string = '';

  public getCompanyData() {
    this.companyServiceService
      .get()
      .subscribe((company: ICompony[]) => (this.companys = company));
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  ngOnInit(): void {
    this.getCompanyData();
  }
}
