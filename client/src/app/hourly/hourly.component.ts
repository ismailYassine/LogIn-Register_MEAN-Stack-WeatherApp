import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { WttrObject } from '../../../../common/weather';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }
  
  public meteos: WttrObject[] = [];
  public weather: Number[] = [0,1,2,3];
  ngOnInit(): void {
    // console.log('va fonctionne');
    
    this._weatherService.data.subscribe({
      next: (meteos) => {
        this.meteos = meteos;
        console.log("meteo", this.meteos);

       },
        error:(err) => console.log(err),
  })
}
}


