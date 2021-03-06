import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CardComponent } from 'src/app/shared/components/card/card.component';
// GamesService

@NgModule({
  declarations: [
    AllGamesComponent

  ],
  imports: [
    CommonModule,
    AllGamesRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AllGamesModule { }
