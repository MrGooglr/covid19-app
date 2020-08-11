import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from '../../services/fetcher.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public indiaData:Object;
  public globalData:Object;
  public dateOfData;
  constructor(private fetcherService : FetcherService) { }
  /*
  `
      <p>{{ test | json }}</p>
      <p>Total Confirmed {{ test["TotalConfirmed"] | number}}</p>
  `
  */
  ngOnInit(): void {
    this.fetcherService.getCovidDataSummery()
      .subscribe(data => {
        let globalData = data["Global"];
        let dataDate = data["Date"];
        this.dateOfData = dataDate;
        let countries = data["Countries"];
        let india = countries[76];
        this.indiaData = india;
        this.globalData = globalData;
        console.log("New Confirmed global "+globalData["NewConfirmed"]
        +" Date "+dataDate+" Country "+india["Country"] +" "+ india["TotalConfirmed"] 
        );
      });
  
      //this.test.event();
      
  }

}
