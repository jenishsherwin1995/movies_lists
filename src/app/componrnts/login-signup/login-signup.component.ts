import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "login-signup",
  templateUrl: "./login-signup.component.html"
})
export class LoginSignupComponent implements OnInit {
  public formData: FormGroup;
  // ruDWLeHr9K7ErsUS

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formData = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", Validators.required]
    });
  }

  get username() {
    return this.formData.get("username");
  }

  get password() {
    return this.formData.get("password");
  }

  async onSubmit() {
    try {
      const res = await this.authService.postAsync(
        "usermodule/login/",
        this.formData.value
      );
      if (res.is_success) {
        this.tokenService.saveToken("token", res.data.token);
        this.router.navigateByUrl("movies");
      }
    } catch (err) {
      console.log(err.error);
    }
  }
}
