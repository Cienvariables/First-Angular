import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInterface, IGameResponse } from 'src/app/core/services/games/models/Igames';
import { map, Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games/games.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})

export class DetailPageComponent implements OnInit {
  // @Input() public allGamesId?: GamesService[] = [];
  public currentgame?: GameInterface;


  constructor(
    private activatedRoute: ActivatedRoute,
    private GamesService: GamesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const gameId = params['id'];
      this.GamesService.getDetailGameId(gameId).subscribe((gameId) => {
        this.currentgame = gameId;
      }
      );
      console.log(gameId);
    });
  }

}


