import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

Observable
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }
  searchMulti(keySearch:string):Observable<any>
  {
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/search/multi?api_key=&language=en-US&page=1&include_adult=false&query=${keySearch}`)
  }
  getPeople(pageNum:number):Observable<any>
  {
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/person/popular?api_key=&language=en-US&page=${pageNum}`)
  }
  descoverTv(pageNum:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=&language=en-US&sort_by=popularity.desc&page=${pageNum}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
  }
  descoverMovies(pageNum:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`)
  }
  getSimilar(media_type:string,id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=&language=en-US&page=1`)
  }
  getDetails(media_type:string,id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=&language=en-US`);

  }
  getTrending(media_type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=`);
  }
}
