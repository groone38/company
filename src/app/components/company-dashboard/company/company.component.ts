import { Component, Input } from '@angular/core';
import { ICompony } from 'src/app/models/compony.model';
import { CompanyServiceService } from './../../services/company/company-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  constructor(private readonly companyServiceService: CompanyServiceService) {}

  @Input() company: ICompony;

  public delete(id: number) {
    this.companyServiceService.delete(id);
  }
}
