import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import io from "socket.io-client";

import { Room } from "@core/models/room";
import { Message } from "@core/models/message";
import { Event } from "@core/models/event";
import { User } from "@core/models/user";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  room: Room;
  socket: any;
  receive: (msg: Event) => void;

  constructor(private userService: UserService) {}

  createRoom(name: string): string {
    const currentUser = this.userService.getUser();
    this.room = new Room(name, currentUser);
    return name;
  }

  getRoom(id: number): Room {
    this.room.users.push(this.userService.getUser());
    return this.room;
  }

  connect(): Observable<Event> {
    this.socket = io("http://localhost:3000", {
      query: {
        id: this.room.name,
        user: this.userService.getUser().name
      }
    });

    this.socket.on("user joined", (user: string, sockets: Event) => {
      console.log("users update: ", sockets);
      this.room.users = sockets.content as User[];
      this.receive(new Event("users update", `user ${user} joined the room!`));
    });

    this.socket.on("user left", (user: string, sockets: Event) => {
      console.log("users update:", sockets);
      this.room.users = sockets.content as User[];
      this.receive(new Event("users update", `user ${user} left`));
    });

    this.socket.on("chat message", (msg: Event) => {
      console.log("message received", msg);
      this.room.messages.push(msg);
    });

    return new Observable<Event>(observable => {
      this.receive = (msg: Event) => observable.next(msg);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(msg: string): void {
    const message = new Message(msg, this.userService.getUser());
    this.socket.emit("chat message", this.room.name, message);
  }
}
