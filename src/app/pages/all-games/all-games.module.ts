import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { HttpClientModule } from '@angular/common/http';
// GamesService

@NgModule({
  declarations: [
    AllGamesComponent
  ],
  imports: [
    CommonModule,
    AllGamesRoutingModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AllGamesModule { }
