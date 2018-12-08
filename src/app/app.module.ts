import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NewestPageComponent } from './components/newest-page/newest-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AskPageComponent } from './components/ask-page/ask-page.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { ThreadsPageComponent } from './components/threads-page/threads-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NewestPageComponent,
    UserPageComponent,
    LoginPageComponent,
    AskPageComponent,
    SubmitPageComponent,
    ThreadsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
