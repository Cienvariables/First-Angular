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


  public getDetailGameId(id: string): Observable<IGameResponse> {
    return this.myhttp.get<IGameResponse>(`${environment.apiUrl}game?id=${id}`);
  }

  public searchCharacter(query = '', page = 1) {
    const filter = `${environment.apiUrl}games?search=${query}&page=${page}`;
    return this.myhttp.get<IGameResponse[]>(filter);
  }
  // le falta paginacion

  // allgames
  public getAllGames(): Observable<IGameResponse[]> {
    return this.myhttp.get<IGameResponse[]>(`${environment.apiUrl}games`);
  }

}
