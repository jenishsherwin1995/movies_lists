import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TokenService {
  private sessionStorage = window.sessionStorage;

  public getToken(tokenKey: string): string {
    return this.sessionStorage[tokenKey];
  }

  public saveToken(tokenKey: string, tokenValue: string) {
    this.sessionStorage[tokenKey] = tokenValue;
  }

  public deleteToken(tokenKey: string) {
    this.sessionStorage.removeItem(tokenKey);
  }
}
