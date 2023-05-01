// carta-lezioni.actions.ts
import { createAction, props } from '@ngrx/store';
import {
  CartaLezioni,
  Giornaliera,
  Mensile,
  Settimanale,
} from '../models/carta-lezioni.model';

export const filterByMateria = createAction(
  '[CartaLezioni] Filter By Materia',
  props<{ materia: string }>()
);

export const filterByArgomento = createAction(
  '[CartaLezioni] Filter By Argomento',
  props<{ argomento: string }>()
);

export const filterByPeriodo = createAction(
  '[CartaLezioni] Filter By Periodo',
  props<{ periodo: Giornaliera | Settimanale | Mensile }>()
);


export const loadCartaLezioni = createAction(
    '[CartaLezioni] Load'
  );
  
  export const loadCartaLezioniSuccess = createAction(
    '[CartaLezioni] Load Success',
    props<{ cartaLezioni: CartaLezioni[] }>()
  );
  
  export const loadCartaLezioniFailure = createAction(
    '[CartaLezioni] Load Failure',
    props<{ error: any }>()
  );
