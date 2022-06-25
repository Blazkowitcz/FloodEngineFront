export interface Torrent {
    id?: String
    name?: String
    filename?: String
    user?: Object,
    description?: String
    mediainfo?: String
    hash?: String
    size?: Number
    seeders?: Number
    leechers?: Number
    created_at?: Date
}