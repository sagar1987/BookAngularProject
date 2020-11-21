import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from './book.model';

@Injectable()
export class BookService {
  bookapiUrl = "https://sagarazureapi.azurewebsites.net/api/Book";

  httpOptions = {
    headers : new HttpHeaders({
    "Content-Type":"application/json"
    })
    }

 constructor(private http: HttpClient) { }

 getBooks(): Observable<Book[]> {
 return this.http.get<Book[]>(this.bookapiUrl,this.httpOptions)
 .pipe(
 retry(3),
 catchError(this.handleError)
 );
 }

 private handleError(error: HttpErrorResponse) {
 return throwError(
 'Something bad happened; please try again later.');
 };

}

