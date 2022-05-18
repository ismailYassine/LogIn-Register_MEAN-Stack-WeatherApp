import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Variable binder au input user/html/
  public location: string = '';
  
  constructor(private _getWeathers: WeatherService,) { }

  //Function d'update de la ville/bar de recherche
  updateLocation(){
    // console.log(location);
    // Call getWeathers
    this._getWeathers.getWeathers(this.location).subscribe();
  }

  ngOnInit(): void {
  }

}
