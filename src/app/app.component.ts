import { Component, OnInit } from '@angular/core';
import { WeatherService } from './app.services'
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  private weatherData:any;
  private date:Date;
  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherData = [];
    this.date = new Date();
    this.fetchWeatherData();
  }

  fetchWeatherData(){

    let reqObj: Object = {
        method : "GET",
        // url    : "assets/sampledata.json"
        url : 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=ea59b2f6c7845b7c614afc19724cf4ad'
    }
    // let reqObj = this._utilService.createHttpReqObj("GET", "../assets/json/getFacilityInfoByAssetId.json", reqParam);
    this.weatherService.getWeatherData(reqObj)
      .subscribe(
        response => {
          let result = response.list;
          this.weatherData = result.sort((a, b) => a.name.localeCompare(b.name));
          console.log("result :" + JSON.stringify(response)); //data.headers._headers.get("authorization")
          // if(response.header.statusCode == 0){

          // }
          // else{
          //   console.log("no response");
          // }

      }, //success
      error => {
        console.log("system error");
      },
      () => {
        console.log('call finished');

      }

    );

  }


}
