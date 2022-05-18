import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { WttrObject } from '../../../../common/weather';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-conditions-actuelle',
  templateUrl: './conditions-actuelle.component.html',
  styleUrls: ['./conditions-actuelle.component.css']
})
export class ConditionsActuelleComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

 public meteos: WttrObject[] = [];
 public weather: Number[] = [1,2,3];

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
