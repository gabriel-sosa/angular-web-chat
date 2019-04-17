import { Message } from "./message";
import { User } from "./user";

export class Event {
  type: string;
  content: Message | User[] | string;
  constructor(type: string, content: Message | User[] | string) {
    this.type = type;
    this.content = content;
  }
}
