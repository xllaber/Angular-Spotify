import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private _activatedRoute: ActivatedRoute,
              private _spotifyService: SpotifyService) {
    this.loading = true;
    this._activatedRoute.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    })
  }

  getArtist(id: string) {
    this.loading = true;
    this._spotifyService.getArtist(id)
      .subscribe(artist => {
        // console.log(artist);
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
