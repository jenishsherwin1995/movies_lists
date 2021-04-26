import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  public list = [];

  public set currentPage(value: number) {
    if (value) {
      this.loadMovies(value);
    }
  }
  public get currentPage() {
    return this.pageNumber;
  }
  public collectionSize = 0;
  private token: string;
  private pageNumber = 1;

  constructor(
    private tokebService: TokenService,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.token = this.tokebService.getToken("token");
    this.currentPage = 1;
  }

  public logout() {
    this.tokebService.deleteToken("token");
    this.router.navigateByUrl("");
  }

  public async loadMovies(pageNumber: number) {
    try {
      const movieList: any = await this.moviesService.getMoviesList(
        `maya/movies/?page=${pageNumber}`,
        this.token
      );
      movieList.results.map(result => {
        result.imageSource = `https://ui-avatars.com/api/?name=${
          result.title
        }&rounded=true&size=16`;
      });
      console.log(movieList);
      this.list = movieList.results;
      this.collectionSize = movieList.count;
    } catch (error) {
      console.log(error);
    }
  }
}
