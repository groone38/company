import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  IDepartamentRequest,
  IDepartament,
} from 'src/app/models/departament.model';

const BASE_URL: string = 'http://localhost:5000/compony';

@Injectable({
  providedIn: 'root',
})
export class DepartamentService {
  constructor(private readonly http: HttpClient) {}

  private company: IDepartament[] = [];
  public entities$: Subject<IDepartament[]> = new Subject();

  public get() {
    this.http
      .get<IDepartament[]>(`${BASE_URL}`)
      .subscribe((company: IDepartament[]) => {
        this.company = company;
        this.entities$.next(this.company);
      });
  }

  public create(company: IDepartament) {
    this.http
      .post<IDepartamentRequest>(`${BASE_URL}`, company)
      .subscribe((company: IDepartamentRequest) => {
        this.company = company.data;
        this.entities$.next(this.company);
      });
  }

  public put(company: string, id: number) {
    this.http.put(`${BASE_URL}/${id}`, company).subscribe(() => this.get());
  }

  public delete(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`).subscribe(() => this.get());
  }
}
