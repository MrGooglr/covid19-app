import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetcherService } from '../../services/fetcher.service';
import { ICountryData } from '../../countrydata';

interface ICountryModel{
  countryModel: ICountryData   
}

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public indiaData : Object;
  public globalData : Object;
  public dateOfData;
  public countriesArray : Object;
  
  

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
        this.countriesArray = countries;
        let india = countries[76];
        this.indiaData = india;
        this.globalData = globalData;
      });
      
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("covidData");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

}
