import { Component, OnInit } from '@angular/core';
import {ApiInterviewService} from "../../services/api-interview.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-news',
  templateUrl: './select-news.component.html',
  styleUrls: ['./select-news.component.scss']
})
export class SelectNewsComponent implements OnInit {

  filterSearch: FormControl = new FormControl('Angular');

  targetValue = '';

  frameworksLibraries = [
    {
      id: 1,
      name: "Angular",
      img: './assets/angular.png'
    },
    {
      id: 2,
      name: "React",
      img: './assets/react.png'
    },
    {
      id: 3,
      name: "Vuejs",
      img: './assets/vuejs.png'
    }
  ];

  getImageUrl( url: string ) {
    return `url(${ url })`;
  }

  constructor(
    private apiInterview: ApiInterviewService
  ) { }

  ngOnInit(): void {
    this.apiInterview.searchByDate( "0", this.filterSearch.value.toLowerCase() ).subscribe(
      (listNews: any) => {
        this.apiInterview.listNews = listNews;
      }
    )
  }

  searchByQuery( option: any) {
    console.log( option.target.value.toLowerCase() );

    const optionSelected = option.target.value.toLowerCase();
    if ( option.target.value !== '') {
      this.targetValue = option.target.value;
    }

    this.apiInterview.searchByDate("0", optionSelected).subscribe(
      (listNews: any) => {
        this.apiInterview.listNews = listNews;
      }
    );
        this.apiInterview.newSearch = true;
    if ( this.apiInterview.newSearch || option.target.value !== this.targetValue  ) {
      this.apiInterview.showCards = false;
      this.apiInterview.getData;
      this.apiInterview.showCards = true;
    }

  }

}
