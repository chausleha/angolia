import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { DateAgoPipe } from './pipe/date-ago.pipe';
import {SharedModule} from "primeng/api";
import {CardModule} from "primeng/card";
import { HeaderSmallComponent } from './components/header-small/header-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    UserComponent,
    DateAgoPipe,
    HeaderSmallComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
