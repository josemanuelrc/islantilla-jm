import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLogged$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(): void {
    this.userLogged$.next(true);
  }

  logout() {
    this.userLogged$.next(false);
  }

  getUserLoggedObs() {
    return this.userLogged$;
  }
}
