import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData:any=new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken'))
    {
      this.saveUserData();

    }
  }
  signOut()
  {
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }
saveUserData()
{
let encodedUser= JSON.stringify( localStorage.getItem('userToken'));
let decodedUser:object= jwtDecode(encodedUser);
this.userData.next(decodedUser);
}
  signup(userData: Object): Observable<any> {
    return this._HttpClient.post(
      `https://route-movies-api.vercel.app/signup`,
      userData
    );
  }
  signin(userData: Object): Observable<any> {
    return this._HttpClient.post(
      'https://route-movies-api.vercel.app/signin',
      userData
    );
  }
}
