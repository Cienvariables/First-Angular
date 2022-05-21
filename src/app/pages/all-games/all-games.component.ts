import { Component, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/core/services/games/models/Igames';
import { GamesService } from 'src/app/core/services/games/games.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {
  public currentGame$?: Observable<GameInterface>;

  constructor(private service: GamesService) { }
  ngOnInit(): void {

    this.service.getAllGames().subscribe(data => {
      console.log(data);
    });
  }
}
