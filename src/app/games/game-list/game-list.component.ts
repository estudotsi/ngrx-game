import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { Game } from '../../model/game.model';
import { Store } from '@ngrx/store';
import * as fromGameActions from '../state/game.actions';
import { Observable } from 'rxjs';
import * as fromGamesSelector from '../state/game.selector'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit{

    //public game? = this.store.select(gameSelector());
    public game$: Observable<Game[]> = this.store.select(fromGamesSelector.getGames);

    constructor(private gameService: GameService,
                private store: Store){}

    ngOnInit(): void {
      this.store.dispatch(fromGameActions.loadGames());
      //this.listarGames();
    }

    // listarGames(): void {
    //  this.gameService.findAll().subscribe({
    //   next: (data: Game[]) => {
    //     this.game = data;
    //     console.log("Aqui: ", this.game);
    //     },
    //   error: (erro: any) => {
    //     console.log("Error: ", erro.error)
    //     },
    //   complete: () => {
    //     console.log("Completou")
    //     }
    //   })
    // }

}
