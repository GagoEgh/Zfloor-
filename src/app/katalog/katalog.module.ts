import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatalogComponent } from './katalog/katalog.component';
import { FlooringSelComponent } from './flooring-sel/flooring-sel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KatalogComponent,
    FlooringSelComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
  ],

  exports:[
    KatalogComponent,
    FlooringSelComponent
  ]
})
export class KatalogModule { }
