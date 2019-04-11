import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateRoomComponent } from "./create-room/create-room.component";
import { EnterRoomComponent } from "./enter-room/enter-room.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";

const routes: Routes = [
  { path: "create", component: CreateRoomComponent },
  { path: "enter", component: EnterRoomComponent },
  { path: ":id", component: ChatRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
