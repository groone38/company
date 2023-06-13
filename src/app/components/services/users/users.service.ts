import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';

const BASE_URL: string = 'http://localhost:5000/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}
  private users: User[] = [];
  public entities$: Subject<User[]> = new Subject();

  public get(id: string) {
    return this.http
      .get<User[]>(`${BASE_URL}/${id}`)
      .subscribe((users: User[]) => {
        this.users = users;
        this.entities$.next(this.users);
      });
  }

  public post(user: User, id: string) {
    return this.http
      .post<User[]>(`${BASE_URL}/${id}`, user)
      .subscribe((users: any) => {
        console.log(users);
        this.users = users.data;
        this.entities$.next(this.users);
      });
  }

  public put(user: User, id: number, companyId: string) {
    return this.http.put<User[]>(`${BASE_URL}/${id}`, user).subscribe(() => {
      this.get(companyId);
    });
  }

  public delete(id: number, companyId: string) {
    return this.http
      .delete(`${BASE_URL}/${id}`)
      .subscribe(() => this.get(companyId));
  }
}
