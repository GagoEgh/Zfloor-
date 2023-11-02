import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatalogComponent } from './katalog/katalog.component';
import { KatalogRoutingModule } from './katalog-routing.modules';
import { katalogReducer } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';
import { CovrolinComponent } from './covrolin/covrolin.component';



@NgModule({
  declarations: [
    KatalogComponent,
    CovrolinComponent
  ],
  imports: [
    CommonModule,
    KatalogRoutingModule,
    StoreModule.forFeature('katalog',katalogReducer),
  ]
})
export class KatalogModule { }
