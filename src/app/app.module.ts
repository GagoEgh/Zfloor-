import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FloorCoveringsModule } from './floor_coverings/floor-coverings.module';
import { KatalogModule } from './katalog/katalog/katalog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FloorCoveringsModule,
    KatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
