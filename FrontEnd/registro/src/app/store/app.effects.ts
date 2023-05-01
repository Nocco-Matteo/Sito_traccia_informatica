// carta-lezioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartaLezioniService } from '../services/carta-lezioni.service';
import * as CartaLezioniActions from './app.actions';
import { of } from 'rxjs';


@Injectable()
export class CartaLezioniEffects {
  loadCartaLezioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartaLezioniActions.loadCartaLezioni),
      mergeMap(() =>
        this.cartaLezioniService.getCartaLezioni().pipe(
          map(cartaLezioni => CartaLezioniActions.loadCartaLezioniSuccess({ cartaLezioni })),
          catchError(error => of(CartaLezioniActions.loadCartaLezioniFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cartaLezioniService: CartaLezioniService
  ) {}
}
