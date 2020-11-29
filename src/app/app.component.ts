import { Component } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { catchError, take } from 'rxjs/operators';
import { Router } from '@angular/router';

declare function getCountry(lati,long,returnfun) : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'books';
  userCountry : string;
  constructor(private readonly geolocation$: GeolocationService,private router: Router) {}

  ngOnInit() {
    this.geolocation$.pipe(take(1)).subscribe((position) =>
    {
      getCountry(position.coords.latitude,position.coords.longitude, function(response) {
    sessionStorage.setItem('UserCountry', response);
  }.bind(this))
},);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}


