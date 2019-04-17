import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event-display",
  templateUrl: "./event-display.component.html",
  styleUrls: ["./event-display.component.scss"]
})
export class EventDisplayComponent {
  @Input() message: string;
}
