import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FloorCoveringsModule } from './floor_coverings/floor-coverings.module';
import { KatalogModule } from './katalog/katalog.module';
import { SaleModule } from './sale/sale.module';
import { NewsModule } from './news/news.module';
import { ReviewsModule } from './reviews/reviews.module';




@NgModule({
  declarations: [
    MainComponent,
   
  ],

  imports: [
    CommonModule,
    FloorCoveringsModule,
    KatalogModule,
    SaleModule,
    NewsModule,
    ReviewsModule
  ],

  exports:[
    MainComponent
  ]
})
export class MainModule { }
