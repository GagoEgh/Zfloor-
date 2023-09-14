import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorCoveringsComponent } from './floor-coverings/floor-coverings.component';



@NgModule({
  declarations: [
    FloorCoveringsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FloorCoveringsComponent]

})
export class FloorCoveringsModule { }
