import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FloorCoveringsModule } from './floor_coverings/floor-coverings.module';
import { SaleModule } from './sale/sale.module';
import { NewsModule } from './news/news.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { KatalogRewModule } from './katalog-rewind/katalog-rew.module';

@NgModule({
  declarations: [
    MainComponent,
  ],

  imports: [
    CommonModule,
    FloorCoveringsModule,
    KatalogRewModule,
    SaleModule,
    NewsModule,
    ReviewsModule,
    DashboardRoutingModule,
  ],

  exports:[
    MainComponent,
  ]
})
export class DashboardModule { }
