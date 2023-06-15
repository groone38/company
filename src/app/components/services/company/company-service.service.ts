import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ICompanyRequest, ICompony } from 'src/app/models/compony.model';

const BASE_URL: string = 'http://localhost:5000/compony';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private readonly http: HttpClient) {}

  private company: ICompony[] = [];
  public entities$: Subject<ICompony[]> = new Subject();

  public get() {
    this.http
      .get<ICompony[]>(`${BASE_URL}`)
      .subscribe((company: ICompony[]) => {
        this.company = company;
        this.entities$.next(this.company);
      });
  }

  public create(company: ICompony) {
    this.http
      .post<ICompanyRequest>(`${BASE_URL}`, company)
      .subscribe((company: ICompanyRequest) => {
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
