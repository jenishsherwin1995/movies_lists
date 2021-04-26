import { Routes } from "@angular/router";

import { HomeComponent } from "./componrnts/home/home.component";
import { LoginSignupComponent } from "./componrnts/login-signup/login-signup.component";
import { MoviesComponent } from "./componrnts/movies/movies.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginSignupComponent },

  { path: "movies", component: MoviesComponent }
];
