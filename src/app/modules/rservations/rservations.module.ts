import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RservationsRoutingModule } from './rservations-routing.module';
import { RservationsComponent } from './rservations.component';


@NgModule({
  declarations: [
    RservationsComponent
  ],
  imports: [
    CommonModule,
    RservationsRoutingModule
  ]
})
export class RservationsModule { }
