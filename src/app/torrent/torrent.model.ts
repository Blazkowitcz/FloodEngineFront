import { User } from "../user/user.model";
import { Subcategory } from "../subcategory/subcategory.model";

export class Torrent {
    id?: String;
    _id?: String;
    name?: String;
    filename?: String;
    user!: User;
    description?: String;
    category?: String;
    subcategory!: Subcategory;
    mediainfo?: String;
    hash?: String;
    size?: number;
    seeders?: Number;
    leechers?: Number;
    created_at?: String;

    /**
     * Reformat Torrent size from bytes to readable String 
     * @returns {String}
     */
    sizeFormater() {
        let units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        let l = 0, n = this.size || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }
}