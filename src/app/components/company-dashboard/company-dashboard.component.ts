import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CompanyServiceService } from './../services/company/company-service.service';
import { ICompony } from 'src/app/models/compony.model';
import { ModalServiceService } from 'src/app/components/services/modal/modal-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss'],
})
export class CompanyDashboardComponent implements OnInit {
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
