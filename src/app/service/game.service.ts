import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  protected URL = 'http://localhost:3000/games';

  constructor(protected http: HttpClient) { }

  public findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.URL);
  }
}
