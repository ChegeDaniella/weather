import { Component, OnInit } from '@angular/core';
import { WeatherCurrent } from '../weather-current';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  weather: WeatherCurrent = {
    city: "No city",
    conditions: "-",
    temperature: 0,
    icon: ""
  }
  update(weather: WeatherCurrent){
    this.weather = weather
  }
  constructor() { }

  ngOnInit(): void {
  }

}
