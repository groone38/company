import { Component, EventEmitter, OnInit } from '@angular/core';
import { CompanyServiceService } from './../services/company/company-service.service';
import { ICompony } from 'src/app/models/compony.model';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss'],
})
export class CompanyDashboardComponent implements OnInit {
  constructor(
    private readonly companyServiceService: CompanyServiceService,
    private readonly modalServiceService: ModalServiceService
  ) {}
  companys: ICompony[] = [];
  searchText: string = '';

  public getCompanyData() {
    this.companyServiceService.get().subscribe(
      (company: ICompony[]) => {
        this.modalServiceService.isLogged = true;
        this.companys = company;
      },
      (err) => console.log(err)
    );
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.getCompanyData();
  }
}
