import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginSignupComponent } from "./componrnts/login-signup/login-signup.component";
import { HomeComponent } from "./componrnts/home/home.component";
import { MoviesComponent } from "./componrnts/movies/movies.component";
import { routes } from "./app-routing.module";
import { NgModule } from "@angular/core";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginSignupComponent,
    HomeComponent,
    MoviesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
