import { Injectable } from '@angular/core';
import { Torrent } from './torrent.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TorrentService {

    /**
     * Constructor
     * @param http 
     */
    constructor(private http: HttpClient){}

    /**
     * Get list of last Torrent
     * @returns {Torrent[]}
     */
    async getLastTorrents(): Promise<Torrent[]>{
        let torrents: Torrent[] = [];
        let data = await this.http.get<Torrent[]>('http://127.0.0.1:3000/torrents/news', { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
        data!.forEach((torrent: Torrent) => {
            torrents.push(torrent);
        })
        return torrents;
    }
    
    /**
     * Get list of best Torrent
     * @returns {Torrent[]}
     */
    async getBestTorrents(){
        let torrents: Torrent[] = [];
        let data = await this.http.get<Torrent[]>('http://127.0.0.1:3000/torrents/best', { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
        data!.forEach((torrent: Torrent) => {
            torrents.push(torrent);
        })
        return torrents;
    }

    /**
     * Return Torrent
     * @param {String} id 
     * @returns {Torrent}
     */
    async getTorrent(id: String): Promise<Torrent> {
        let torrent = await this.http.get<Torrent>('http://127.0.0.1:3000/torrents/' + id, { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
        return torrent!;
    }

    /**
     * Download Torrent file
     * @param {String} id 
     * @returns {HttpResponse}
     */
    async download(id: String): Promise<any>{
        return await this.http.get('http://127.0.0.1:3000/torrents/' + id + '/download', { headers: {'token': localStorage.getItem('token') ||""}, responseType: 'blob' as 'json', observe: 'response'}).toPromise();
    }

}