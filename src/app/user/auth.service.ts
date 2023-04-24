import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  /** With Server */
  loginUser(userName: string, password: string) {
    const loginIfo = { username: userName, password: password };

    return this.http
      .post('/api/login', loginIfo, this.options)
      .pipe(
        tap((data) => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      this.options
    );
  }

  logout(): Observable<any> {
    this.currentUser = undefined;
    return this.http.post('/api/logout', {}, this.options);
  }

  /** Without Server 
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa',
    };
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
  */
}
