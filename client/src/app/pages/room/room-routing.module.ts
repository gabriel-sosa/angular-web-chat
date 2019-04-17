import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateRoomComponent } from "./create-room/create-room.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";

const routes: Routes = [
  { path: "enter", component: CreateRoomComponent },
  { path: "chat/:id", component: ChatRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
