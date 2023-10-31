import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatalogComponent } from './katalog/katalog.component';
import { KatalogRoutingModule } from './katalog-routing.modules';



@NgModule({
  declarations: [
    KatalogComponent
  ],
  imports: [
    CommonModule,
    KatalogRoutingModule
  ]
})
export class KatalogModule { }
