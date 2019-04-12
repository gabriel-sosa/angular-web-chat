import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RoomRoutingModule } from "./room-routing.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { EnterRoomComponent } from "./enter-room/enter-room.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { MaterialsModule } from "@shared/materials/materials.module";
import { ComponentsModule } from "@shared/components/components.module";

@NgModule({
  declarations: [CreateRoomComponent, EnterRoomComponent, ChatRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule,
    MaterialsModule,
    ComponentsModule
  ]
})
export class RoomModule {}
