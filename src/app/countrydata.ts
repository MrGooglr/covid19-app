export interface ICountryData{
   Global : {
    NewConfirmed: number,
    NewDeaths: number,
    NewRecovered: number,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
   },
   Countries:{
    Country: string,
    CountryCode: string,
    Date: Date,
    NewConfirmed: number,
    NewDeaths: number,
    NewRecovered: number,
    Premium: {},
    Slug: string,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
   },
   Date: Date 
}