import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './services/games/games.service';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from '../shared/components/form/form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  providers: [
    GamesService,
  ],

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormComponent
  ]
})

export class CoreModule { }
