import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCountryGuard } from './route-guards/country-guard.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './books/book.component';
import { ErrorComponent } from './error/error.component'
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './books/book.service';
import { SearchPipe } from './books/book.search.pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    ErrorComponent,
    SearchPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [BookService,UserCountryGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
