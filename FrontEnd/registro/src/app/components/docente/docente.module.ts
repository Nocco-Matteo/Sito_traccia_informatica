import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteComponent } from './docente.component';
import { RouterModule, Routes } from '@angular/router';


const mainRoutes: Routes = [
  {
    path: '',
    component: DocenteComponent
  }
]

@NgModule({
  declarations: [DocenteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports:[DocenteComponent]
})
export class DocenteModule { }
