import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PostComponent} from "./components/post/post.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {path: '', component: HomeComponent}, //домашняя
  {path: 'user', component: UserComponent}, // страница пользователя
  {path: 'post/:id', component: PostComponent} // страница поста11
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
