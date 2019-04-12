import { User } from './user';

export class Message {
    author: User;
    content: string;
    constructor(msg: string, user: User) {
        this.content = msg;
        this.author = user;
    }
}
