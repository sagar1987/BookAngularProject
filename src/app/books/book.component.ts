import { Component, OnInit } from '@angular/core';
import { Book } from "./book.model"
import { BookService } from "./book.service"


@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  error = "";
  filterstring : string;
  isLoading = true;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    const req = this.bookService.getBooks();
    req.subscribe(booksList => 
       { this.books = booksList
        this.hideloader();
       }
      
      , err => this.error = err);
    }

    hideloader() { 
     this.isLoading = false;
    } 

}
