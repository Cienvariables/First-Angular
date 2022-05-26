import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games/games.service';
import { GameInterface, IGameResponse } from 'src/app/core/services/games/models/Igames';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {


  constructor(private service: GamesService) {

  }

  ngOnInit(): void {

  }
}

