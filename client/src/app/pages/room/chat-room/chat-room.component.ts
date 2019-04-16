import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";

import { RoomService } from "@core/services/room.service";
import { Room } from "@core/models/room";
import { Message } from "@core/models/message";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.scss"]
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  room: Room;
  messages: Message[] = [];
  messageInput = new FormControl("", [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      data => (this.room = this.roomService.getRoom(data.id))
    );
    this.roomService.connect().subscribe((msg: Message) => {
      this.messages.push(msg);
    });
  }

  ngOnDestroy() {
    this.roomService.disconnect();
  }

  submit(): void {
    if (this.messageInput.valid) {
      this.sendMessage(this.messageInput.value);
      this.messageInput.patchValue("");
    }
  }

  private sendMessage(msg: string): void {
    this.roomService.sendMessage(msg);
  }
}
