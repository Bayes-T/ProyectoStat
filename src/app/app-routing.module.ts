import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {path: 'stats',
  loadChildren: () => import('./stats/stats.module').then (m => m.StatsModule)},
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: 'error404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'stats',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'stats'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
