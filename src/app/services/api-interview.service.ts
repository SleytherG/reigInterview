import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiInterviewService {

  private _listNews: any[] = [];
  private _newSearch = false;
  private _getData: any;
  private _showCards = false;


  get listNews(): any[] {
    return this._listNews;
  }

  set listNews(value: any[]) {
    this._listNews = value;
  }


  get newSearch(): boolean {
    return this._newSearch;
  }

  set newSearch(value: boolean) {
    this._newSearch = value;
  }


  get getData(): any {
    return this._getData;
  }

  set getData(value: any) {
    this._getData = value;
  }


  get showCards(): boolean {
    return this._showCards;
  }

  set showCards(value: boolean) {
    this._showCards = value;
  }

// get news() {
  //   return this.listNews;
  // }
  //
  // set news( list: any) {
  //   this.listNews = list;
  // }

  constructor(
    private http: HttpClient
  ) { }

  searchByDate( page: string, query: string ) {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`;
    return this.http.get( url );
  }
}
