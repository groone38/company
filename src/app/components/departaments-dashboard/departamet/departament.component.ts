import { Component, Input } from '@angular/core';
import { ICompony } from 'src/app/models/compony.model';
import { CompanyServiceService } from '../../services/company/company-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss'],
})
export class DepartamentComponent {
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
      name__company: [
        this.company.name_company,
        [Validators.required, Validators.minLength(2)],
      ],
    });
  }

  public sendEdit() {
    this.editMode = false;
    this.companyServiceService.put(this.companyform.value, this.company.id);
  }

  public delete(id: number) {
    this.companyServiceService.delete(id);
  }

  public get name__company(): FormControl {
    return this.companyform.get('name__company') as FormControl;
  }
}
