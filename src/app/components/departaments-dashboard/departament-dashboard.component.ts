import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../services/company/departament-service.service';
import { IDepartament } from 'src/app/models/departament.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departament-dashboard',
  templateUrl: './departament-dashboard.component.html',
  styleUrls: ['./departament-dashboard.component.scss'],
})
export class DepartamentDashboardComponent implements OnInit {
  constructor(private readonly departamentService: DepartamentService) {}

  public searchText: string = '';
  public editMode: boolean = false;
  public departaments$: Observable<IDepartament[]>;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {
    this.departamentService.get();
    this.departaments$ = this.departamentService.entities$;
  }
}
