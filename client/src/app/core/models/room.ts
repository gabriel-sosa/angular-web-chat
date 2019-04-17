import { User } from "./user";
import { Event } from './event';

export class Room {
  name: string;
  creator: User;
  messages: Event[];
  users: User[];
  constructor(name: string, creator: User, messages: Event[] = [], users: User[] = []) {
    this.name = name;
    this.creator = creator;
    this.messages = messages;
    this.users = users;
  }
}
