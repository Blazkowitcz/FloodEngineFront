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

    async getTorrent(){
        this.torrent = Object.assign(new Torrent, await this.torrentService.getTorrent(this.route.snapshot.paramMap.get('id')||""));
    }

    ngOnInit(): void {
        this.getTorrent();
    }

}
