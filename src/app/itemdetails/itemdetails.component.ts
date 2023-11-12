import { Component, HostListener, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService,private _Router: Router,private _Location:Location){}
  @HostListener('window:popstate')
  onPopState() {
    let myString:any= location.pathname.split('/').slice(2,4)
    this.mediaType=myString[0];
    this.mediaId=Number(myString[1]);
    this.getSimilar(this.mediaType, this.mediaId);

  }
itemDetails:any={};
itemsSimilar:any;
mediaType:string='';
mediaId:number=1;
ngOnInit(): void {
  let {media_type,id}=this._ActivatedRoute.snapshot.params;
  this.mediaType=media_type;
this._MovieService.getDetails(media_type,id).subscribe({
  next:(data)=>{
    this.itemDetails=data;
  }
})
if(media_type != 'person')
{
  this._MovieService.getSimilar(media_type,id).subscribe({
    next:(data)=>{
      this.itemsSimilar=data.results.slice(0,12);
    }
  })
}
}


getSimilar(media_type:string,id:number)
{
  this._MovieService.getDetails(media_type,id).subscribe({
    next:(data)=>{
      this.itemDetails=data;
      console.log( this.itemDetails);

    }
  })
  this._MovieService.getSimilar(this.mediaType,id).subscribe({
    next:(data)=>{
      this.itemsSimilar=data.results.slice(0,12);
    }
  })
}
// refresh():void
// {
//   this._Router.navigateByUrl('itemdetails/:media_type/:id',{skipLocationChange:true}).then(()=>
//   {
//     this._Router.navigate([decodeURI(this._Location.path())])
//   })
// }
}
