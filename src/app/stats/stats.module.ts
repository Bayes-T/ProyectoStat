import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { HomeComponent } from './home/home.component';
import { StatdetailComponent } from './statdetail/statdetail.component';
import { StatnewComponent } from './statnew/statnew.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    StatdetailComponent,
    StatnewComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    MaterialModule
  ]
})
export class StatsModule { }
