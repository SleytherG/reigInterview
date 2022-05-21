import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./news.component";
import {AllNewsComponent} from "./all-news/all-news.component";
import {MyFavesComponent} from "./my-faves/my-faves.component";

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'all',
        component: AllNewsComponent
      },
      {
        path: 'myFaves',
        component: MyFavesComponent
      },
      {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
