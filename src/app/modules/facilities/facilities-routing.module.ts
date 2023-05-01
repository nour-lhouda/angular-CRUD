import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
// 5sni nzid routing dial l containt that I want my facilities/... to have each time 
//when I change the Url after facilities 
const routes: Routes = [{ 
  path: '', component: FacilitiesComponent,
  children:[
    //list component should be imported li huwa exported f list.ts
    { path: 'list',component:ListComponent},
    {path:'details/:facilityId' , component:DetailsComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'}
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }


// 