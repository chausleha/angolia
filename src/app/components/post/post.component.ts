import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any = '';
  comments : any = [] ;
  public isVisibleChild = true;
  constructor(private pageService: PageService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this._route?.snapshot.queryParams;
    console.log(id)
    this.getUser(id);
  }

  getUser(id:any) {
    this.pageService.getItems(id)
      .subscribe(response => {
        this.post = response;
        this.comments = response.children;
      })
  }

  IsVisibleChild() {
    this.isVisibleChild = !this.isVisibleChild;
  }
}
