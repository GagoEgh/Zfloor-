import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    // children:[
    //   {
    //     path: 'katalog',
    //     loadChildren: () => import('../katalog/katalog.module').then(m => m.KatalogModule)
    //   },
    // ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
