import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    FooterModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
