import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaLezioniComponent } from './carta-lezioni.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CartaLezioniComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[CartaLezioniComponent]
})
export class CartaLezioniModule { }
