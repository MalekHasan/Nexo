import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvs:any;
  pageIndex:number=1;
  constructor(private _MovieService:MovieService){}

  ngOnInit(): void {
    this.descoverTV(this.pageIndex)
  }
descoverTV(pageNum:number)
{
  this._MovieService.descoverTv(pageNum).subscribe({
    next:(data)=>this.tvs=data.results.filter((show:any)=> show.poster_path !=null)
  })
}
next(){
  this.pageIndex++;
  if(this.pageIndex>50)
  {
    this.pageIndex=1;
  }
  this.descoverTV(this.pageIndex)
}
prev(){
  this.pageIndex--;
  if(this.pageIndex<1)
  {
    this.pageIndex=50;
  }
  this.descoverTV(this.pageIndex)
}
}
