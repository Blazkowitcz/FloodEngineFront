import { Injectable } from '@angular/core';
import { Torrent } from './torrent.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import config from '../../../config.json';

@Injectable({
    providedIn: 'root'
})
export class TorrentService {

    private base_url = "http://" + config.api_address + ':' + config.api_port;

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
        let data = await this.http.get<Torrent[]>(this.base_url + '/torrents/news', { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
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
        let data = await this.http.get<Torrent[]>(this.base_url +'/torrents/best', { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
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
        let torrent = await this.http.get<Torrent>(this.base_url +'/torrents/' + id, { headers: {"token": localStorage.getItem('token') ||""}}).toPromise();
        return torrent!;
    }

    /**
     * Download Torrent file
     * @param {String} id 
     * @returns {HttpResponse}
     */
    async download(id: String): Promise<any>{
        return await this.http.get(this.base_url + '/torrents/' + id + '/download', { headers: {'token': localStorage.getItem('token') ||""}, responseType: 'blob' as 'json', observe: 'response'}).toPromise();
    }

    async upload(file: any): Promise<any> {
        let formData = new FormData();
        formData.append("file", file, file.name);
        return await this.http.post(this.base_url + '/torrents/', formData).toPromise();
    }
}