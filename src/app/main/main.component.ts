import { Component, OnInit } from '@angular/core';
import { Torrent } from '../torrent/torrent.model';
import { TorrentService } from '../torrent/torrent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  new_torrents: Torrent[] = [];
  best_torrents: Torrent[] = [];

  constructor(private torrentService: TorrentService) { }

  /**
   * 
   */
  async getNewTorrents(){
    let torrents = await this.torrentService.getLastTorrents();
    torrents.forEach((torrent: Torrent) => {
      this.new_torrents.push(Object.assign(new Torrent, torrent));
    });
  }

  /**
   * 
   */
  async getBestTorrents(){
    let torrents = await this.torrentService.getBestTorrents();
    torrents.forEach((torrent: Torrent) => {
      this.best_torrents.push(Object.assign(new Torrent, torrent));
    });
  }

  ngOnInit(): void {
    this.getNewTorrents();
    this.getBestTorrents();
  }

}
