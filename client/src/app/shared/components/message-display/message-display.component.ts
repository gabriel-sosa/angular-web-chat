import { Component, Input } from "@angular/core";

@Component({
  selector: "app-message-display",
  templateUrl: "./message-display.component.html",
  styleUrls: ["./message-display.component.scss"]
})
export class MessageDisplayComponent {
  @Input() user: string;
  @Input() message: string;
}
