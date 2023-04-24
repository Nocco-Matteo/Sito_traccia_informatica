import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteComponent } from './studente.component';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: '',
    component: StudenteComponent
  }
]

@NgModule({
  declarations: [StudenteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports:[StudenteComponent]
})
export class StudenteModule { }
