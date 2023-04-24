import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteComponent } from './studente.component';
import { RouterModule, Routes } from '@angular/router';
import { FiltriModule } from "../filtri/filtri.module";

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
        FiltriModule
    ]
})
export class StudenteModule { }
