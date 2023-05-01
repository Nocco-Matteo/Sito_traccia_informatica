import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartaLezioniState, cartaLezioniAdapter } from './app.state';

export const selectCartaLezioniState = createFeatureSelector<CartaLezioniState>('cartaLezioni');

const {
  selectAll,
  // altre funzioni helper di entityAdapter possono essere aggiunte qui se necessario
} = cartaLezioniAdapter.getSelectors();

export const selectAllCartaLezioni = createSelector(
    selectCartaLezioniState,
    selectAll
  );
  
  