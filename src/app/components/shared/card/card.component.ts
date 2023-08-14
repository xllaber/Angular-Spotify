import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  @Input() items: any[] = [];

  constructor(private _router: Router) {
  }

  viewArtist(item: any) {
    let artistId;
    if (item.type === "artist") {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this._router.navigate(["/artist", artistId]);
  }

}
