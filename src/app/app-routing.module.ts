import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './books/book.component';
import {ErrorComponent} from './error/error.component'
import { UserCountryGuard } from './route-guards/country-guard.service';

const appRoutes: Routes = [
  { path: 'InvalidCountry', component: ErrorComponent},
  { path: 'books', component: BookComponent, children: [
    { path: '', component: BookComponent , canActivate : [UserCountryGuard] }
  ]},
  { path: '', redirectTo: '/books', pathMatch: 'full' , canActivate : [UserCountryGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
