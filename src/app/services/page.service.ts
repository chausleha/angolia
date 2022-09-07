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


  getSearch(parameter1:string = '', parameter2=0): Observable<any> {
    return this.http.get<any>(`http://hn.algolia.com/api/v1/search_by_date?query=${parameter1}&page=${parameter2}`)
  }

  getSortedByRelevance(parameter1:string = '', parameter2:string = '', parameter3=0): Observable<any> {
    return this.http.get<any>(`https://hn.algolia.com/api/v1/${parameter1}${parameter2}&page=${parameter3}`)
  }


}
