import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  accedi(user: User): Observable<any> {

    return of([])
  }
}
