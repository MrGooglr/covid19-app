import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryData } from '../countrydata';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  private _urlForSummary : string = "https://api.covid19api.com/summary";

  constructor(private http : HttpClient) { }

  getCovidDataSummery(){
   return this.http.get(this._urlForSummary,{ responseType:"json" });
  }
}
