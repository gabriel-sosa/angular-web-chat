import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  @Input() user: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
