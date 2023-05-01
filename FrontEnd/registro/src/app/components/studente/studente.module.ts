import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteComponent } from './studente.component';
import { RouterModule, Routes } from '@angular/router';
import { FiltriModule } from "../filtri/filtri.module";
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartaLezioniModule } from '../carta-lezioni/carta-lezioni.module';

const mainRoutes: Routes = [
  {
    path: '',
    component: StudenteComponent
  }
]

@NgModule({
    declarations: [StudenteComponent],
    exports: [StudenteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        FiltriModule,
        MatCardModule,
        CartaLezioniModule,
        NgbModule
    ]
})
export class StudenteModule { }
