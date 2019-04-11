import { Injectable } from "@angular/core";

import { User } from "@core/models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;

  constructor() {}
  signIn(user: User): void {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }
  islogged(): boolean {
    return !!this.user;
  }
}
