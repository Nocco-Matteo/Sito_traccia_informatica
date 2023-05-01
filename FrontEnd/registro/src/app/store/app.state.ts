import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { CartaLezioni } from '../models/carta-lezioni.model';

export interface CartaLezioniState extends EntityState<CartaLezioni> {
  selectedCartaLezioniId: string | null;
}

export const cartaLezioniAdapter = createEntityAdapter<CartaLezioni>({
  selectId: (cartaLezioni: CartaLezioni) => cartaLezioni.id,
});

export const initialCartaLezioniState: CartaLezioniState = cartaLezioniAdapter.getInitialState({
  selectedCartaLezioniId: null,
});
