import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";

import { RoomService } from "@core/services/room.service";
import { Room } from "@core/models/room";
import { Message } from "@core/models/message";
import { Event } from "@core/models/event";
import { User } from "@core/models/user";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.scss"]
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  messageInput = new FormControl("", [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.roomService.connect().subscribe((msg: Event) => {
      this.roomService.room.messages.push(msg);
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
