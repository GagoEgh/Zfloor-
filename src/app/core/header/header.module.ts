import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderContactsComponent } from './header-contacts/header-contacts.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    HeaderContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    NavBarComponent,
    HeaderContactsComponent
  ]
})
export class HeaderModule { }
