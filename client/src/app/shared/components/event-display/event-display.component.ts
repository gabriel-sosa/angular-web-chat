import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
