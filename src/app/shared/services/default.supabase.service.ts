

import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export default class DefaultSupabaseService<T> {
  protected _list: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  protected supabase!: SupabaseClient;
  protected table!: string;

  constructor(_class: new () => T) {
    this.table = String(_class);
    this.supabase = createClient(environment.NEXT_PUBLIC_SUPABASE_URL, environment.SUPABASE_SECRET_KEY, {
      headers: {
        ['apikey']: environment.SUPABASE_SECRET_KEY,
      },
      schema: environment.schema,
      autoRefreshToken: true,
      persistSession: true
    })
  }

  private get getReactiveList(): Observable<T[]> {
    return this._list.asObservable();
  }

  async getList() {
    let { data: books, error } = await this.supabase
      .from<T>(this.table)
      .select('*')
      .limit(1000)
    return { books, error };
  }

  private async loadList() {
    const qy = await this.getList();
    this._list.next(qy.books as T[]);
  }

  async create(value: T) {

    const { data, error } = await this.supabase
      .from<T>(this.table)
      .insert(value)

    return { data, error };

  }

  async delete(...keys: any) {
    const data = await this.supabase
      .from<T>(this.table)
      .delete()
      .match({ ...keys })
    return data
  }

  async update(value: T, ...keys: any) {

    console.warn('UPDATE-->',value)

    const { data, error} = await this.supabase
      .from<T>(this.table)
      .update(value)
      .match({ ...keys })

    return {data, error}
  }

  


}

