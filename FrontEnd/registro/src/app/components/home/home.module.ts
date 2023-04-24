import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { LoginComponent } from '../login/login.component';
import { StudenteModule } from '../studente/studente.module';
import { StudenteComponent } from '../studente/studente.component';

//TODO problema con rotta non esistente
const mainRoutes: Routes = [
  
  {
      path: '',
      component: HomeComponent,
      children:[
        {
          path:'login',
          loadChildren: ()=> import('../login/login.module').then(m =>m.LoginModule)
        },
        {
          path:'studente/dashboard',
          loadChildren: ()=> import('../studente/studente.module').then(m =>m.StudenteModule)
        },
        {
          path: 'docente/dashboard',
          loadChildren: ()=> import('../docente/docente.module').then(m =>m.DocenteModule)
        }
      ]
    },
   
]


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    NavbarModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
