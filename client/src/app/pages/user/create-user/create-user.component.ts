import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "@core/services/user.service";
import { User } from "@core/models/user";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"]
})
export class CreateUserComponent {
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(name: string) {
    this.userService.signIn(new User(name));
    this.router.navigate(["/home"]);
  }
}
