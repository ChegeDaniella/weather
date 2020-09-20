import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { WeatherCurrent } from '../weather-current';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Output() onSelection :EventEmitter<WeatherCurrent> = new EventEmitter<WeatherCurrent>()
  weather :WeatherCurrent =new WeatherCurrent()
  city: string = ""

  constructor(private weatherData: WeatherServiceService) { }

  submit(){
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions =data ['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273)*1.8 +32)
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      this.onSelection.emit(this.weather)
    })
  }

  ngOnInit(): void {
  }

}
