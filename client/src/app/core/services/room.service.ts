import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Room } from "@core/models/room";
import { Message } from "@core/models/message";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  room: Room;
  receive: (msg: Message) => void;

  constructor(private userService: UserService) {}

  createRoom(name: string): number {
    const currentUser = this.userService.getUser();
    this.room = new Room(name, currentUser);
    return 0;
  }

  getRoom(id: number): Room {
    this.room.users.push(this.userService.getUser());
    return this.room;
  }

  connect(): Observable<Message> {
    return new Observable<Message>(observable => {
      this.receive = (msg: Message) => observable.next(msg);
    });
  }

  sendMessage(msg: string): void {
    this.receive(new Message(msg, this.userService.getUser()));
  }
}
