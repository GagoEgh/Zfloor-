import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlooringSelComponent } from './flooring-sel/flooring-sel.component';
import { FormsModule } from '@angular/forms';
import { KatalogRewComponent } from './katalog-rew/katalogRew.component';


@NgModule({
  declarations: [
    KatalogRewComponent,
    FlooringSelComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
  ],

  exports:[
    KatalogRewComponent,
    FlooringSelComponent
  ]
})
export class KatalogRewModule { }
