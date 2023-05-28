import { Component, OnInit } from '@angular/core';
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

  public getCompanyData() {
    this.companyServiceService
      .get()
      .subscribe((company: ICompony[]) => (this.companys = company));
  }
  ngOnInit(): void {
    this.getCompanyData();
  }
}
