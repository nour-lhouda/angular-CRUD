import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RservationsComponent } from './rservations.component';

const routes: Routes = [{ path: '', component: RservationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RservationsRoutingModule { }
