import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './services/games/games.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    GamesService
  ],

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})

export class CoreModule { }
