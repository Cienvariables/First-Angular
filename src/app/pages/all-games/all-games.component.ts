import { Component, OnInit } from '@angular/core';
import { GameInterface, IGameResponse } from 'src/app/core/services/games/models/Igames';
import { GamesService } from 'src/app/core/services/games/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})

export class AllGamesComponent implements OnInit {
  public currentGame$?: Observable<GameInterface>;
  public allGames: IGameResponse[];

  constructor(private service: GamesService) {
    this.allGames = [];
  }

  ngOnInit(): void {
    this.service.getAllGames().subscribe(data => {
      this.allGames = data;
    });
  }

}



