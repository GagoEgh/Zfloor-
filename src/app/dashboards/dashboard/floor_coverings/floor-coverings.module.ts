import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorCoveringsComponent } from './floor-coverings/floor-coverings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'katalog',
  //   loadChildren: () => import('../../katalog/katalog.module').then(m => m.KatalogModule)
  // },

];

@NgModule({
  declarations: [
    FloorCoveringsComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    FloorCoveringsComponent,
  ]


})
export class FloorCoveringsModule { }
