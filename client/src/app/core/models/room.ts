import { User } from "./user";
import { Message } from './message';

export class Room {
  name: string;
  creator: User;
  messages: Message[];
  users: User[];
  constructor(name: string, creator: User, messages: Message[] = [], users: User[] = []) {
    this.name = name;
    this.creator = creator;
    this.messages = messages;
    this.users = users;
  }
}
