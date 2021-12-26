import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../service/newsapiservices.service";
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  BusinessnewsDisplay:any=[];
  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      console.log(result)
      this.BusinessnewsDisplay= result.articles;
    });
  }

}
