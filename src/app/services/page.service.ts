import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getItems(id: number): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/items/${id}`)
  }

  getUsers(username: string): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/users/${username}`)
  }

  getSortedByRelevance(parameter:string = '...'): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search?query=${parameter}`)
  }

  getSortedByDate(parameter:string = '...'): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search_by_date?query=${parameter}`)
  }
}
