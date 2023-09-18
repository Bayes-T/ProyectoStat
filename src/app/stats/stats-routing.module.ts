import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './home/home.component';
import { StatdetailComponent } from './statdetail/statdetail.component';
import { StatnewComponent } from './statnew/statnew.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'stathome',
        component: HomeComponent
      },
      {
        path: 'statdetail/:id',
        component: StatdetailComponent
      },
      {
        path: 'statnew',
        component: StatnewComponent
      },
      {
        path: '**',
        redirectTo: 'statlist'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
