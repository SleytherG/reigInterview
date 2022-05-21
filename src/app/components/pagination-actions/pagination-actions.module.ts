import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationActionsComponent} from "./pagination-actions.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PaginationActionsComponent
  ],
  exports: [
    PaginationActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PaginationActionsModule { }
