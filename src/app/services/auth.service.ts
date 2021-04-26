import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseURL = "https://demo.onefin.in/api/v1/";

  constructor(private httpClient: HttpClient) {}
  postAsync(endpoint: string, userInput: any): Promise<any> {
    const url = this.baseURL + endpoint;
    return this.httpClient.post(url, userInput).toPromise();
  }
}
