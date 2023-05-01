import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { LoginModule } from './components/login/login.module';
import { StudenteModule } from './components/studente/studente.module';
import { DocenteModule } from './components/docente/docente.module';
import { FiltriModule } from './components/filtri/filtri.module';
import { CartaLezioniModule } from './components/carta-lezioni/carta-lezioni.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartaLezioniReducer } from './store/app.reducer';
import { CartaLezioniEffects } from './store/app.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HomeModule,
    StoreModule.forRoot({ cartaLezioni: cartaLezioniReducer }),
    EffectsModule.forRoot([CartaLezioniEffects]),
    NavbarModule,
    LoginModule,
    StudenteModule,
    DocenteModule,
    CartaLezioniModule,
    FiltriModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
