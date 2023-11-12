import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  movies:any;
  pageIndex:number=1;
constructor(private _MovieService:MovieService){}

  ngOnInit(): void {
    this.descoverMovies(this.pageIndex)
  }
descoverMovies(pageNum:number)
{
  this._MovieService.descoverMovies(pageNum).subscribe({
    next:(data)=>this.movies=data.results.filter((show:any)=> show.poster_path !=null)

  })
}
next(){
  this.pageIndex++;
  if(this.pageIndex>50)
  {
    this.pageIndex=1;
  }
  this.descoverMovies(this.pageIndex)
}
prev(){
  this.pageIndex--;
  if(this.pageIndex<1)
  {
    this.pageIndex=50;
  }
  this.descoverMovies(this.pageIndex)
}
}
