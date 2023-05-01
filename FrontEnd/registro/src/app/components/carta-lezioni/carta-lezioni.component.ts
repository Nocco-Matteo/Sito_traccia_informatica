import { Component, Input, OnInit } from '@angular/core';
import { MOCK_CARTE } from 'src/app/configs/carta-Lezioni.config';
import { CartaLezioni, Giornaliera, Mensile, Settimanale } from 'src/app/models/carta-lezioni.model';

@Component({
  selector: 'app-carta-lezioni',
  templateUrl: './carta-lezioni.component.html',
  styleUrls: ['./carta-lezioni.component.scss']
})
export class CartaLezioniComponent implements OnInit {

  @Input() currentCardColor! : string;
  @Input() carta!: CartaLezioni;
  constructor() { }

  ngOnInit(): void {
  }

  isGiornaliera(obj: any): obj is Giornaliera {
    return 'data' in obj;
  }
  isSettimanale(obj: any): obj is Settimanale {
    return 'inizioSettimana' in obj && 'fineSettimana' in obj;
  }

  isMensile(obj: any): obj is Mensile {
    return 'inizioMese' in obj && 'fineMese' in obj;
  }
}
