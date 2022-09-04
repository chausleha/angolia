import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

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

  getPage(): Observable<any> {
    return this.http.get<any>(`https://hn.algolia.com/api/v1/search`)
  }

  getSortedByRelevance(parameter:string = '...'): Observable<any> {
    return this.http.get<any>(`https://hn.algolia.com/api/v1/search?query=${parameter}`)
  }

  getSortedByDate(parameter:string = '...'): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search_by_date?query=${parameter}`)
  }


  getSearchByАuthor(parameter:string = '...'): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search_by_date?tags=author_${parameter}`)
  }


}
