import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-faves',
  templateUrl: './my-faves.component.html',
  styleUrls: ['./my-faves.component.scss']
})
export class MyFavesComponent implements OnInit {

  data = [
    {
      imgSrc: './assets/iconFavorite.svg'
    },
    {
      imgSrc: './assets/iconFavorite.svg'
    },
    {
      imgSrc: './assets/iconFavorite.svg'
    },
    {
      imgSrc: './assets/iconFavorite.svg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
