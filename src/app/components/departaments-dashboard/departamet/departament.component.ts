import { Component, Input } from '@angular/core';
import { IDepartament } from 'src/app/models/departament.model';
import { DepartamentService } from '../../services/company/departament-service.service';
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
    private readonly departamentService: DepartamentService,
    private readonly formBuilder: FormBuilder,
    public readonly generalService: GeneralService
  ) {}

  @Input() departament: IDepartament;
  public departamentform!: FormGroup;
  public editMode: boolean = false;

  ngOnInit(): void {
    this.departamentform = this.formBuilder.group({
      name__company: [
        this.departament.name_company,
        [Validators.required, Validators.minLength(2)],
      ],
    });
  }

  public sendEdit() {
    this.editMode = false;
    this.departamentService.put(
      this.departamentform.value,
      this.departament.id
    );
  }

  public delete(id: number) {
    this.departamentService.delete(id);
  }

  public get name__company(): FormControl {
    return this.departamentform.get('name__company') as FormControl;
  }
}
