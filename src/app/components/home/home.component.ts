import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

interface Select {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public posts: any = '';
  public home: any = '';
  public title = '';
  public selected1: Select = {name: 'All', code: ''};
  public selected2: Select = {name: 'Popularity', code: ''};


  public search: Select[] = [
    {name: 'All', code: ''},
    {name: 'Stories', code: 'tags=story'},
    {name: 'Comments', code: 'tags=comment'},
  ];
  public by: Select[] = [
    {name: 'Popularity', code: 'search?'},
    {name: 'Date', code: 'search_by_date?'},
  ];

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.getPages();


  }

  onModelChange() {
    this.pageService.getSortedByRelevance(this.selected2.code, this.selected1.code)
      .subscribe(response => {
        this.home = response;
        this.posts = response.hits;
      })

      }


  getPages() {
    this.pageService.getPage()
      .subscribe(response => {
        this.home = response;
        this.posts = response.hits;
      })
  }

  onInput(event:any) {
    this.title = event.target.value
    if (this.title) {
      this.getSearch(this.title);
    }
    else {
      this.getPages();
    }



  }


  getSearch(parametrs:any) {
    this.pageService.getSearch(parametrs)
      .subscribe(response => {
        this.home = response;
        this.posts = response.hits;
      })
  }

}
