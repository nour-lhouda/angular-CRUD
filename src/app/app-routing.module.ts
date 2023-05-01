import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'facilities', loadChildren: () => import('./modules/facilities/facilities.module').then(m => m.FacilitiesModule) },
  { path: 'reservations', loadChildren: () => import('./modules/rservations/rservations.module').then(m => m.RservationsModule) },
  { path: 'instruments', loadChildren: () => import('./modules/instruments/instruments.module').then(a => a.InstrumentsModule)},
  { path: '', redirectTo: 'facilities', pathMatch: 'full'},
];

  //hma if path== facilities sirliya lhad directory
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
