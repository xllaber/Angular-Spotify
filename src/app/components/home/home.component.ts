import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = []
  loading: boolean;
  error: boolean;
  // @ts-ignore
  errorMessage: string;
  constructor( private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this._spotifyService.getNewReleases()
      .subscribe(
        (data: any) => {
          this.newReleases = data;
          this.loading = false;
        },
        ((err: any) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = err.error.error.message;
          console.log(this.errorMessage);
        })
      );
  }
}
