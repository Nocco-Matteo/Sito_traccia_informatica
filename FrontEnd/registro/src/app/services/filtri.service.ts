import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  FILTRO_ARGOMENTO,
  FILTR_MATERIA,
  FILTRO_PERIODO,
} from '../configs/filtri.config';

@Injectable({
  providedIn: 'root',
})
export class FiltriService {
  constructor() {}

  getFiltri(): Observable<any> {
    const filtroArgomento = FILTRO_ARGOMENTO;
    const filtroMateria = FILTR_MATERIA;
    const filtroPeriodo = FILTRO_PERIODO;

    return of([filtroArgomento,filtroMateria,filtroPeriodo]);
  }
}
