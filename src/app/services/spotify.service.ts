import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQAeEgt_bTT2abEnkVzyvwksSIx5IF5hcumSu6ADB34uUA950jaWxeSV4ltmL0wg7dvu_bku1uHZhNeNuPeKEsVu3HI-PU62QegegI6EZtp9erzdU-s"
    })
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers});
  }

  getNewReleases(): any {
    return this.getQuery("browse/new-releases?limit=20")
      .pipe(map((data: any) => data["albums"].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe(map((data: any) => data["artists"].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
      .pipe(map((data: any) => data["tracks"]));
  }
}
