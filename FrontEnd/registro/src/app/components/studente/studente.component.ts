import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartaLezioniState } from '../../store/app.state';
import { MOCK_CARTE } from 'src/app/configs/carta-Lezioni.config';
import { COLORI_CARDS, DEFAULT_PERIOD } from 'src/app/configs/filtri.config';
import { CartaLezioni } from 'src/app/models/carta-lezioni.model';
import * as CartaLezioniActions from '../../store/app.actions';
import * as CartaLezioniSelectors from '../../store/app.selectors';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss'],
  animations: [],
})
export class StudenteComponent implements OnInit {
  isOpen: boolean = true; //TODO animazione cambio colore
  cardColors : any = COLORI_CARDS;
  currentCardColor : string = this.cardColors[DEFAULT_PERIOD]
  carteLezioni$: Observable<CartaLezioni[]> = new Observable<CartaLezioni[]>;

  constructor(private readonly store: Store<CartaLezioniState>) {}

  ngOnInit(): void {
    
    this.store.dispatch(CartaLezioniActions.loadCartaLezioni());
    this.carteLezioni$ = this.store.select(CartaLezioniSelectors.selectAllCartaLezioni);
    console.log(this.carteLezioni$,'obs');
    
  }

  changePeriodEvent(color : string): void {
    this.currentCardColor = color
  }
}
