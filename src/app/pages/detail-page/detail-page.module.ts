import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import { DetailPageComponent } from './detail-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
//DetailService

@NgModule({
  declarations: [
    DetailPageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DetailPageModule { }
