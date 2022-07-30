import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any = '';
  constructor(private pageService: PageService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this._route?.snapshot.queryParams;
    this.getUser(id);
  }

  getUser(id:any) {
    this.pageService.getUsers(id)
      .subscribe(response => {
        this.user = response;
      })
  }

}




