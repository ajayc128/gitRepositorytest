import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{ HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserformComponent } from './components/userform/userform.component';
import { UserService } from './shared_service/user.service';

const appRoutes:Routes=[
{path:"",component:ListuserComponent},
{path:"op",component:UserformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
