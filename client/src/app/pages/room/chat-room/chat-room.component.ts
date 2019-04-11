import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '@core/services/room.service';
import { Room } from '@core/models/room';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  room: Room;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(
      data => id = data.id
    );
    this.room = this.roomService.getRoom(id);
    console.log(this.room);
  }

}
