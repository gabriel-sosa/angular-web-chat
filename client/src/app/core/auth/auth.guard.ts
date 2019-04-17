import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router
} from "@angular/router";

import { UserService } from "@core/services/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    return this.userService.islogged()
      ? true
      : this.router.parseUrl("/user/create");
  }
}
