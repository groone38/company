import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../services/company/company-service.service';
import { ICompony } from 'src/app/models/compony.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departament-dashboard',
  templateUrl: './departament-dashboard.component.html',
  styleUrls: ['./departament-dashboard.component.scss'],
})
export class DepartamentDashboardComponent implements OnInit {
  constructor(private readonly companyServiceService: CompanyServiceService) {}

  public searchText: string = '';
  public editMode: boolean = false;
  public company$: Observable<ICompony[]>;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.companyServiceService.get();
    this.company$ = this.companyServiceService.entities$;
  }
}
