import {Injectable} from "@angular/core";
import {SupabaseClient} from "@supabase/supabase-js";
import {Book} from "../models/book.model";
import {Author} from "../models/author.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private readonly supabase: SupabaseClient) {
    this.generateAuthors()
      .then(r => console.log("Authors generated"))
      .catch(e => console.error(e));
  }

  async generateAuthors() {
    let authors: Author[] = [
      {author_id: null, name: 'Juca Bala', birth_day: new Date('10/10/2000'), active: true},
      {author_id: null, name: 'Author 001', birth_day: new Date('09/09/2001'), active: true},
      {author_id: null, name: 'Author 002', birth_day: new Date('08/08/2002'), active: true},
      {author_id: null, name: 'Author 003', birth_day: new Date('07/07/2003'), active: true},
      {author_id: null, name: 'Author 004', birth_day: new Date('06/06/2004'), active: true}
    ]

    await this.getAuthors()
      .then(r => {
        if (r.authors?.length === 0) {
          authors.forEach(a => this.addAuthor(a)
            .then(c => console.log('Author Created', c))
            .catch(e => console.error(e))
          )
        }
      })
      .catch(e => console.error(e))
  }

  async addAuthor(author: Author) {
    const {data, error} = await this.supabase
      .from<Author>('author')
      .insert(author)
    return {data, error};
  }

  async getAuthors() {
    let {data: authors, error} = await this.supabase
      .from<Author>('author')
      .select('*')
      .limit(10)
    return {authors, error};
  }
}
