import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboards/dashboard/dashboard.module';
import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule,
    DashboardModule,
    FooterModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
