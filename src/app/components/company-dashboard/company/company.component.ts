import { Component, Input } from '@angular/core';
import { ICompony } from 'src/app/models/compony.model';
import { CompanyServiceService } from './../../services/company/company-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from './../../services/general.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  constructor(
    private readonly companyServiceService: CompanyServiceService,
    private readonly formBuilder: FormBuilder,
    public readonly generalService: GeneralService
  ) {}

  @Input() company: ICompony;
  public companyform!: FormGroup;
  public editMode: boolean = false;

  ngOnInit(): void {
    this.companyform = this.formBuilder.group({
      name__company: [this.company.name_company],
    });
  }

  public sendEdit() {
    this.editMode = false;
    this.companyServiceService.put(this.companyform.value, this.company.id);
  }

  public delete(id: number) {
    this.companyServiceService.delete(id);
  }
}
