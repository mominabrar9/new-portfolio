import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplayLhsComponent } from './display-lhs/display-lhs.component';
import { DisplayRhsComponent } from './display-rhs/display-rhs.component';

@NgModule({
  declarations: [
    DisplayComponent,
    DisplayLhsComponent,
    DisplayRhsComponent
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
