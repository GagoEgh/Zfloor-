import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KatalogComponent } from './katalog/katalog.component';

const routes: Routes = [
  {
    path:'',
    component:KatalogComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KatalogRoutingModule { }