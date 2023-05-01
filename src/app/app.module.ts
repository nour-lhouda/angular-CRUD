import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { InstrumentsComponent } from './modules/instruments/instruments.component';
import { ListComponent } from './modules/instruments/list/list.component';
import { InstrumentsModule } from './modules/instruments/instruments.module';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstrumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
