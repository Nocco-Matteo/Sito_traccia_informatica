import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/login',
    pathMatch: 'full'
  },
  {
    path: 'studente',
    component: HomeComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: ()=> import('./components/studente/studente.module').then(m =>m.StudenteModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  },
  {
    path: 'docente',
    component: HomeComponent,
    children:[
      {
        path: 'dashboard',
        loadChildren: ()=> import('./components/docente/docente.module').then(m =>m.DocenteModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path:'login',
        loadChildren: ()=> import('./components/login/login.module').then(m =>m.LoginModule)
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
