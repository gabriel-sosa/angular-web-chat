import { User } from "./user";

export class Room {
  name: string;
  creator: User;
  constructor(name: string, creator: User) {
    this.name = name;
    this.creator = creator;
  }
}
