import { User } from "../user/user.model";

export class Torrent {
    id?: String;
    _id?: String;
    name?: String;
    filename?: String;
    user!: User;
    description?: String;
    category?: String;
    subcategory?: String;
    mediainfo?: String;
    hash?: String;
    size?: Number;
    seeders?: Number;
    leechers?: Number;
    created_at?: String;

    getName(): string {
        return `${this.name}`;
    }
}