import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    DisplayComponent
  ]
})
export class DisplayModule { }
