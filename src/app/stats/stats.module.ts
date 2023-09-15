import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { HomeComponent } from './home/home.component';
import { StatdetailComponent } from './statdetail/statdetail.component';
import { StatnewComponent } from './statnew/statnew.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { editDialog } from './components/statDialog/statDialog.component';
import { MaterialModule } from '../material/material.module';
import { StatcardComponent } from './statcard/statcard.component';
import { SplitPipe } from './pipes/split.pipe';
import { InfodetailComponent } from './components/infodetail/infodetail.component';
import { TopicsPipe } from './pipes/topics.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    StatdetailComponent,
    StatnewComponent,
    LayoutPageComponent,
    StatcardComponent,
    SplitPipe,
    InfodetailComponent,
    TopicsPipe,
    editDialog
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StatsModule { }
