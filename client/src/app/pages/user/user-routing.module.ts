import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateUserComponent } from "./create-user/create-user.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { AuthGuard } from "@core/auth/auth.guard";

const routes: Routes = [
  { path: "create", component: CreateUserComponent },
  { path: "signout", component: SignOutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
