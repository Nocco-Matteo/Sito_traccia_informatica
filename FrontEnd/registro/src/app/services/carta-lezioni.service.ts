// carta-lezioni.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CartaLezioni } from '../models/carta-lezioni.model';
import { MOCK_CARTE } from '../configs/carta-Lezioni.config';

@Injectable({
  providedIn: 'root',
})
export class CartaLezioniService {
  private readonly API_URL = '';

  constructor() {}

  getCartaLezioni(): Observable<CartaLezioni[]> {
    //return this.http.get<CartaLezioni[]>(this.API_URL);
    return of(MOCK_CARTE)
  }
}
