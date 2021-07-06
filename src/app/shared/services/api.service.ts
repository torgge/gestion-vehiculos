import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.NEXT_PUBLIC_SUPABASE_URL, environment.SUPABASE_SECRET_KEY, {
      headers: {
        ['apikey']: environment.SUPABASE_SECRET_KEY,
      },
      schema: environment.schema,
      autoRefreshToken: true,
      persistSession: true
    })

    this.loadBooks();
    this.handleBookChanges();

    // this.supabase.auth.onAuthStateChange((event, session) => {
    //   if (event === 'SIGNED_IN') {
    //     console.log('SIGNED IN')
    //     this.loadBooks();
    //     this.handleBookChanges();
    //   }
    // })

  }

  async addBook(book: Book) {
    const { data, error } = await this.supabase
      .from<Book>('book')
      .insert(book)

    return { data, error };
  }

  get getBooksObs(): Observable<Book[]> {
    return this._books.asObservable();
  }

  async loadBooks() {
    const qy = await this.getBooks();
    this._books.next(qy.books as Book[]);
  }

  async getBooks() {
    let { data: books, error } = await this.supabase
      .from<Book>('book')
      .select('*')
      .limit(1000)
    return { books, error };
  }

  async deleteBook(id: string) {
    const data = await this.supabase
      .from<Book>('book')
      .delete()
      .match({ book_id: id })
    return data
  }

  async update(book: Book) {

    console.warn('UPDATE-->',book)

    const { data, error} = await this.supabase
      .from<Book>('book')
      .update(book)
      .match({ book_id: book.book_id })

    return {data, error}
  }

  async updatCheck(book: Book) {
    const { data, error } = await this.supabase
      .from('book')
      .update({ title: book.title })
      .match({ book_id: book.book_id })
  }

  listenAll() {
    const mySubscription = this.supabase
      .from('book')
      .on('*', payload => {
        console.log('Change received!', payload)
      })
      .subscribe()
    return mySubscription;
  }

  handleBookChanges() {
    return this.supabase
      .from('book')
      .on('*', payload => {
        console.log('Change received!', payload)
        switch (payload.eventType) {
          case 'DELETE': {
            const oldItem: Book = payload.old
            const newItem: Book[] = this._books.value.filter(it => it.book_id !== oldItem.book_id)
            this._books.next(newItem)
            break
          }
          case 'INSERT': {
            const newItem: Book = payload.new;
            this._books.next([...this._books.value, newItem])
            break
          }
          case 'UPDATE': {
            const updatedItem: Book = payload.new
            const updatedBookList: Book[] = this._books.value.map(it => (it.book_id === updatedItem.book_id) ? it = updatedItem : it)
            this._books.next(updatedBookList)
            break
          }
        }
      })
      .subscribe()

  }

}
