import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent/torrent.model';
import { TorrentService } from '../torrent/torrent.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-torrent',
    templateUrl: './torrent.component.html',
    styleUrls: ['./torrent.component.css']
})
export class TorrentComponent implements OnInit {

    torrent: Torrent = new Torrent;

    constructor(private torrentService: TorrentService, private route: ActivatedRoute) { }

    /**
     * Get Torrent informations
     */
    async getTorrent(){
        this.torrent = Object.assign(new Torrent, await this.torrentService.getTorrent(this.route.snapshot.paramMap.get('id')||""));
    }

    /**
     * Download Torrent file
     * @param {String} id 
     */
    async download(id: String){
        let file: any = await this.torrentService.download(id);
        let filename: string = file.headers.get('Content-Disposition')?.split('filename')[1].split(';')[0].replace('=', '');
        let a = document.createElement('a');
        let objectUrl = URL.createObjectURL(file.body);
        a.href = objectUrl;
        a.download = filename || 'unknow_name.torrent';
        a.click();
        URL.revokeObjectURL(objectUrl);
    }

    ngOnInit(): void {
        this.getTorrent();
    }

}
