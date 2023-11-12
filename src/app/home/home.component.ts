import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  trendeingMovies:any;
  trendeingTv:any;
  trendeingPeople:any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor(private _MovieService:MovieService){}
  ngOnInit(): void {

    this._MovieService.getTrending('movie').subscribe({
      next:(data)=>this.trendeingMovies=data.results.slice(0,10)
    })
    this._MovieService.getTrending('tv').subscribe({
      next:(data)=>this.trendeingTv=data.results.slice(0,10)
    })
    this._MovieService.getTrending('person').subscribe({
      next:(data)=>this.trendeingPeople=data.results.filter((movie:any)=> movie.profile_path).slice(0,10)
    })
  }

}
