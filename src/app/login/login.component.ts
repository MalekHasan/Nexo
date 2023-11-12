import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private _AuthService:AuthService,private _Router:Router){}
err:string='';
isLoading:boolean=false;
loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.minLength(5),Validators.required]),
})
  submitingLoginForm(loginForm:FormGroup){

  this._AuthService.signin(loginForm.value).subscribe({
  next:(response)=>{
    this.isLoading=true;
    console.log(response);

    if(response.message=='success')
    {
      localStorage.setItem('userToken',response.token);
      this._AuthService.saveUserData();
      this._Router.navigate(['/home']);
    }
    else{
      this.isLoading=false;
      this.err=response.message;
    }
  }
})
  }
ngOnInit(): void {

}
}
