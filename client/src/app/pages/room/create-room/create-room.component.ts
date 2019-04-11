import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { RoomService } from "@core/services/room.service";

@Component({
  selector: "app-create-room",
  templateUrl: "./create-room.component.html",
  styleUrls: ["./create-room.component.scss"]
})
export class CreateRoomComponent implements OnInit {
  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit() {}

  onSubmit(name: string): void {
    const id = this.roomService.createRoom(name);
    this.router.navigate([`/room/${id}`]);
  }
}
