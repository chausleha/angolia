import {Component} from '@angular/core';
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

export class HomeComponent {
  public posts: any = '';
  public home: any = '';
  public title = '';
  public selected1: Select = {name: 'All', code: ''};
  public selected2: Select = {name: 'Popularity', code: ''};
  public page: number;



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
    this.page = 0;
  }


  onModelChange(parameter3?:number) {
    this.pageService.getSortedByRelevance(this.selected2.code, this.selected1.code, parameter3)
      .subscribe(response => {
        this.home = response;
        this.posts = response.hits;
      })
      }

  onInput(event:any) {
    this.title = event.target.value
    if (this.title) {
      this.getSearch(this.title);
      return;
    }
      this.onModelChange();
  }


  getSearch(parametrs1:any, parametrs2?:any) {
    this.pageService.getSearch(parametrs1, parametrs2)
      .subscribe(response => {
        this.home = response;
        this.posts = response.hits;
      })
  }

  paginate(event:any) {
    if(this.title){
      this.getSearch(this.title,event.page);
      return;
    }
      this.onModelChange(event.page)

  }
}
