import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "@core/services/user.service";

@Component({
  selector: "app-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.scss"]
})
export class SignOutComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.signOut();
    this.router.navigate(["/home"]);
  }
}
