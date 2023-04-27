import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { LoginComponent } from '../login/login.component';
import { StudenteModule } from '../studente/studente.module';
import { StudenteComponent } from '../studente/studente.component';


const mainRoutes: Routes = [



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
