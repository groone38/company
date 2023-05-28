import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompony } from 'src/app/models/compony.model';

const BASE_URL: string = 'http://localhost:5000/compony';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<ICompony[]> {
    return this.http.get<ICompony[]>(`${BASE_URL}`);
  }
}
