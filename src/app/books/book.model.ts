
export class Book {
  public id : number;
  public bookName: string;
  public author: string;
  public status: string;

  constructor(id : number,bookName: string, author: string, status: string) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.status = status;
  }
}
