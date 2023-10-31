import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadChildren:()=>import('./dashboards/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'company',
    loadChildren:()=>import('./dashboards/company/company.module').then(m=>m.CompanyModule)
  },
  {
    path:'katalog',
    loadChildren:()=>import('./dashboards/katalog/katalog.module').then(m=>m.KatalogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
