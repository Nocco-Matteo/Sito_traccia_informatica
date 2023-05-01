// carta-lezioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { CartaLezioniState, cartaLezioniAdapter, initialCartaLezioniState } from './app.state';
import * as CartaLezioniActions from './app.actions';
import { Giornaliera, Settimanale, Mensile } from '../models/carta-lezioni.model';

export const cartaLezioniReducer = createReducer(
  initialCartaLezioniState,

  // Implementa le operazioni di filtraggio qui
  on(CartaLezioniActions.filterByMateria, (state, { materia }) => {
    // Filtra le carte lezioni per materia
    // Aggiorna lo stato e restituiscilo
    return state;
  }),

  on(CartaLezioniActions.filterByArgomento, (state, { argomento }) => {
    // Filtra le carte lezioni per argomento
    // Aggiorna lo stato e restituiscilo
    return state;
  }),

  on(CartaLezioniActions.filterByPeriodo, (state, { periodo }) => {
    // Filtra le carte lezioni per periodo
    // Aggiorna lo stato e restituiscilo
    return state;
  }),
  
  on(CartaLezioniActions.loadCartaLezioniSuccess, (state, { cartaLezioni }) => {
    return cartaLezioniAdapter.setAll(cartaLezioni, state);
  }),
  on(CartaLezioniActions.loadCartaLezioniFailure, (state, { error }) => {
    console.error(error);
    return state;
  })
);
