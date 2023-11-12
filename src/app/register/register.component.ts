import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
constructor(private _AuthService:AuthService,private _Router:Router){}
err:string='';
registerForm:FormGroup=new FormGroup({
  first_name:new FormControl(null,[Validators.minLength(3),Validators.required]),
  last_name:new FormControl(null,[Validators.minLength(3),Validators.required]),
  age:new FormControl(null,[Validators.min(16),Validators.max(90),Validators.required]),
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.minLength(5),Validators.required]),
})
isLoading:boolean=false;
  submitingRegisterForm(registerForm:FormGroup){
  this._AuthService.signup(registerForm.value).subscribe({
  next:(response)=>{
    this.isLoading=true;
    console.log(response);

    if(response.message=='success')
    {
      this._Router.navigate(['/register']);
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
