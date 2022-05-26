import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { DetailPageComponent } from './detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule { }
