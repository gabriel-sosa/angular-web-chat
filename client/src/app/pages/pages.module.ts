import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { RoomModule } from "./room/room.module";
import { UserModule } from "./user/user.module";
import { MaterialsModule } from "@shared/materials/materials.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialsModule,
    RoomModule,
    UserModule
  ]
})
export class PagesModule {}
