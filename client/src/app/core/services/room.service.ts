import { Injectable } from "@angular/core";

import { Room } from "@core/models/room";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  rooms: Room[] = [];

  constructor(
    private userService: UserService
  ) {}

  createRoom(name: string): number {
    const currentUser = this.userService.getUser();
    this.rooms.push(new Room(name, currentUser));
    console.log(this.rooms);
    return this.rooms.length - 1;
  }

  getRoom(id: number): Room {
    return this.rooms[id];
  }
}
