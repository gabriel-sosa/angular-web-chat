import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RoomModule } from "./room/room.module";
import { UserModule } from "./user/user.module";
import { AuthGuard } from "@core/auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "room",
    loadChildren: () => RoomModule,
    canActivate: [AuthGuard]
  },
  { path: "user", loadChildren: () => UserModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
