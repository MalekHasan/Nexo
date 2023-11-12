import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLogin:boolean=false;
  searchResult:any;

constructor(private _AuthService:AuthService, private _Router:Router,private _MovieService:MovieService){}
logOut(){
  this.isLogin=false;
  this._AuthService.signOut();
}
ngOnInit():void{
  this._AuthService.userData.subscribe({
    next:()=>
    {
      if (this._AuthService.userData.getValue()) {
        this.isLogin=true;
      }
      else
      {
        this.isLogin=false;
        this._Router.navigate(['/login'])
      }
    }
  })
}
seacrhDyn:string='';
searchForm:FormGroup=new FormGroup({
  searchInput:new FormControl(this.seacrhDyn)
});
searchInput(searchForm:FormGroup)
{
  this.seacrhDyn=searchForm.value.searchInput;
this._MovieService.searchMulti(this.seacrhDyn).subscribe({
  next:(data)=>this.searchResult=data.results.filter((item:any)=>item.backdrop_path).slice(0,6)
})
}
seacrhKey(){
  this.seacrhDyn='';
}
}
