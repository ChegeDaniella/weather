import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = '3070e4a2b60e3a568a7057ed61cf4ab8'
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  load (city:String){
    return this.http.get(serviceUrl+ '?q=' + city +'&appid=' +apiKey)
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/'+ icon +'.png'
  }
}
