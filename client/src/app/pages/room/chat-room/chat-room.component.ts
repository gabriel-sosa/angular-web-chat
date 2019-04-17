import { Component, OnInit, OnDestroy, AfterViewChecked } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { RoomService } from "@core/services/room.service";
import { Event } from "@core/models/event";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.scss"]
})
export class ChatRoomComponent implements OnInit, OnDestroy, AfterViewChecked {
  messageInput = new FormControl("", [Validators.required]);

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.connect().subscribe((msg: Event) => {
      this.roomService.room.messages.push(msg);
    });
  }

  ngOnDestroy() {
    this.roomService.disconnect();
  }

  ngAfterViewChecked(){
    const matDrawer = document.querySelector("mat-drawer-content");
    matDrawer.scroll(0, matDrawer.scrollHeight);
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
