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

  constructor(private torrentService: TorrentService) { }

  /**
   * 
   */
  async getNewTorrents(){
    let torrents = await this.torrentService.getLastTorrents();
    torrents.forEach(torrent => {
      this.new_torrents.push(torrent);
    });
    console.log(this.new_torrents);
  }

  ngOnInit(): void {
    this.getNewTorrents();
  }

}
