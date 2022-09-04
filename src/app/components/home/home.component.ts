import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any = '';
  title = '';
  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.getPages();

  }

  getPages() {
    this.pageService.getPage()
      .subscribe(response => {
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
        this.posts = response.hits;
      })
  }

}
