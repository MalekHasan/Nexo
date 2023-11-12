import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
  people:any;
  pageIndex:number=1;
  constructor(private _MovieService:MovieService){}

  ngOnInit(): void {
    this.getPeople(this.pageIndex)
  }
getPeople(pageNum:number)
{
  this._MovieService.getPeople(pageNum).subscribe({
    next:(data)=>this.people=data.results.filter((person:any)=> person.profile_path !=null)
  })
}
next(){
  this.pageIndex++;
  if(this.pageIndex>50)
  {
    this.pageIndex=1;
  }
  this.getPeople(this.pageIndex)
}
prev(){
  this.pageIndex--;
  if(this.pageIndex<1)
  {
    this.pageIndex=50;
  }
  this.getPeople(this.pageIndex)
}

}
