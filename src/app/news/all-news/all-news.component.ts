import {Component, OnInit} from '@angular/core';
import {ApiInterviewService} from "../../services/api-interview.service";
import * as moment from "moment";

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  showCards = false;
  timeAgo = [];

  data = [
    {
      created_at : '',
      author: '',
      imgSrc: './assets/iconFavorite.svg',
      story_url: '',
      story_title: ''
    },

  ];

  constructor(
    public apiInterviewService: ApiInterviewService
  ) {
  }

  ngOnInit(): void {
    this.getData();
    if ( this.apiInterviewService.newSearch ) {
      this.showCards = false;
      this.getData();
      this.showCards = true;
    }
    // this.apiInterviewService.getData = this.getData();
  }

  setData() {
    const news = this.apiInterviewService.listNews;
    // @ts-ignore
    this.data = news['hits'];

    // @ts-ignore
    this.data.map( el => el['created_at']  = moment().startOf('day').from(el.created_at));

  }

  getData() {
    setTimeout(() => {
      const getNews = this.apiInterviewService.listNews;
      console.log('NEWS', getNews );
      this.setData();
      this.apiInterviewService.showCards = true;
      this.showCards = true;
    }, 2000)
    // this.apiInterviewService.showCards = this.showCards;

  }
}
