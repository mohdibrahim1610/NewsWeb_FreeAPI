import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  
  //newsApiUrl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=0b61cddf3a774e868b5cc903edd9ae76";
  
//TechNewsApiUrl
  techApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=0b61cddf3a774e868b5cc903edd9ae76";

//BuinessNews
  BusinessNews="https://newsapi.org/v2/top-headlines?country=in&apiKey=0b61cddf3a774e868b5cc903edd9ae76";

  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

//techNews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //
business():Observable<any>
{
  return this._http.get(this.BusinessNews);
}
}
