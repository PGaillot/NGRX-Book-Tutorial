import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/book.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBookService } from './book-list/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(
    private booksService:GoogleBookService,
    private store:Store
  ){}
  
  onAdd(bookId:string){
    this.store.dispatch(BooksActions.addBook({bookId}));
  }

  onRemove(bookId:string){
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }
  
  ngOnInit(): void {
    this.booksService
    .getBooks()
    .subscribe((books) => {
      this.store.dispatch(BooksApiActions.retrivedBookList({books}))
    })
  }

}
