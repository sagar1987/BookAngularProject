import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class UserCountryGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        const userCountry = sessionStorage.getItem('UserCountry');
        if (userCountry != 'India') {
            this.router.navigate(['/InvalidCountry']);
            return false;
          } else {
            return true;
          }
    }
}