import { Component } from '@angular/core';
import { GamesService } from './core/services/games/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GamesService]
})

export class AppComponent {
  // usuario: any;

  constructor(private gamesService: GamesService) { }
  ngOnInit() {
    this.gamesService.getAllGames().subscribe(res => {
      // console.log(res);
    });
  }
}
