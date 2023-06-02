import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable, Subscriber, Subscription, catchError, map } from 'rxjs';

const BASE_URL: string = 'http://localhost:5000/auth';

export interface IResponceLogin {
  message: string;
  token: string;
  admin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(private readonly http: HttpClient) {}
  isLogged: boolean = false;
  token: string = '';

  public get(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/singupUsers`);
  }

  public postLogin(user: User): Observable<IResponceLogin> {
    return this.http.post<IResponceLogin>(`${BASE_URL}/login`, user);
  }

  public postRegistr(user: User): Observable<IResponceLogin> {
    return this.http.post<IResponceLogin>(`${BASE_URL}/registr`, user);
  }
}
