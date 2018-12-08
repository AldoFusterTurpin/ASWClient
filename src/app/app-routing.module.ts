import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './components/index-page/index-page.component';
import { NewestPageComponent } from './components/newest-page/newest-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AskPageComponent } from './components/ask-page/ask-page.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { ThreadsPageComponent } from './components/threads-page/threads-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'newest', component: NewestPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'ask', component: AskPageComponent },
  { path: 'submit', component: SubmitPageComponent },
  { path: 'threads', component: ThreadsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
