import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import io from "socket.io-client";

import { Room } from "@core/models/room";
import { Message } from "@core/models/message";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  room: Room;
  receive: (msg: Message) => void;
  socket: any;

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

  connect(): Observable<Message> {
    this.socket = io("http://localhost:3000", {
      query: {
        id: this.room.name,
        user: this.userService.getUser().name
      }
    });

    this.socket.on("user joined", user => {
      console.log(`user ${user} joined the room`);
    });

    this.socket.on("user left", user => {
      console.log(`user ${user} left`);
    });

    this.socket.on("chat message", (msg: Message) => {
      console.log("message received", msg);
      this.receive(msg);
    });

    return new Observable<Message>(observable => {
      this.receive = (msg: Message) => observable.next(msg);
    });
  }

  disconnect(){
    this.socket.disconnect();
  }

  sendMessage(msg: string): void {
    const message = new Message(msg, this.userService.getUser());
    this.socket.emit("chat message", this.room.name, message);
  }
}
