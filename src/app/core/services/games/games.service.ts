import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameInterface, IGameResponse } from './models/Igames';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(private myhttp: HttpClient) { }

  // allgames
  public getAllGames(): Observable<IGameResponse> {
    return this.myhttp.get<IGameResponse>(`${environment.apiUrl}games`);
  }

  // public getGameById(id: number): Observable<GameInterface> {
  //   return this.httpClient.get<GameInterface>(`${environment.apiUrl}games/${id}`);
  // }


}
