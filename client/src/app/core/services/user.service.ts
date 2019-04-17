import { Injectable } from "@angular/core";

import { User } from "@core/models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user: User;

  constructor() {}
  signIn(user: User): void {
    this.user = user;
  }
  signOut(): void {
    this.user = null;
  }
  getUser(): User {
    return this.user;
  }
  islogged(): boolean {
    return !!this.user;
  }
}
