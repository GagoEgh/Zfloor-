import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    FooterModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
