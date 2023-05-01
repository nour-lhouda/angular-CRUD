import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFacilityDialogComponent } from './add-facility-dialog/add-facility-dialog.component';



@NgModule({
  declarations: [
    FacilitiesComponent,
    ListComponent,
    DetailsComponent,
    AddFacilityDialogComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class FacilitiesModule { }

// we added card module API component to facility.module then 
// import it