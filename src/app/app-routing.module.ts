import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/all-games/all-games.module').then(m => m.AllGamesModule)
  },
  {
    path: 'games/:id',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then(m => m.DetailPageModule)
  },
  // {
  //   path: 'my-account',
  //   loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: '',
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
