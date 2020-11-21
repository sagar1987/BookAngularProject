import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './books/book.component';
import {ErrorComponent} from './error/error.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'InvalidCountry', component: ErrorComponent},
  { path: 'books', component: BookComponent, children: [
    { path: '', component: BookComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
