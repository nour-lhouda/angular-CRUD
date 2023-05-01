import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsRoutingModule as InstrumentsRoutingModule } from './instruments-routing.module';
import { ListComponent } from './list/list.component';
import { InstrumentsComponent } from './instruments.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InstrumentsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    HttpClientModule

  ]
})
export class InstrumentsModule { }