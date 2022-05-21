import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from "./news.component";
import {AllNewsComponent} from './all-news/all-news.component';
import {MyFavesComponent} from './my-faves/my-faves.component';
import { SelectNewsComponent } from './select-news/select-news.component';
import {PaginationActionsModule} from "../components/pagination-actions/pagination-actions.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewsComponent,
    AllNewsComponent,
    MyFavesComponent,
    SelectNewsComponent
  ],
  exports: [
    NewsComponent
  ],

  imports: [
    CommonModule,
    NewsRoutingModule,
    PaginationActionsModule,
    ReactiveFormsModule
  ]
})
export class NewsModule {
}
