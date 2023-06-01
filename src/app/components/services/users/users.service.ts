import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

const BASE_URL: string = 'http://localhost:5000/compony';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  public get(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/${id}/users`);
  }

  public post(user: User): Observable<void> {
    return this.http.post<void>(`http://localhost:5000/users`, user);
  }
}
