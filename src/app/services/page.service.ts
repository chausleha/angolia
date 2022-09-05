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



  getSearch(parameter:string = ''): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search_by_date?query=${parameter}`)
  }

  getSortedByRelevance(parameter1:string = '', parameter2:string = ''): Observable<any> {
    return this.http.get<any>(`https://hn.algolia.com/api/v1/${parameter1}${parameter2}`)
  }



/*  https://hn.algolia.com/api/v1/search_by_date?tags=story сортировка историй

    https://hn.algolia.com/api/v1/search_by_date?tags=comment сортировка комментариев

    https://hn.algolia.com/api/v1/search_by_date? сортировка по дате
    http://hn.algolia.com/api/v1/search? сортировка по релевантности

    http://hn.algolia.com/api/v1/search?
    http://hn.algolia.com/api/v1/search?tags=story
    http://hn.algolia.com/api/v1/search?tags=comment

  */
}
