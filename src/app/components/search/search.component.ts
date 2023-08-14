import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artists: any[] = [];
  // @ts-ignore
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {}
  search(term: string){
    this.loading = true;
    this._spotifyService.getArtists(term)
      .subscribe((data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
