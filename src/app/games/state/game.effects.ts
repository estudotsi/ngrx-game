import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GameService } from "../../service/game.service";
import * as fromGamesAction from "../state/game.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()

export class GameEffects{

  constructor(private actions$: Actions,
              private gameService: GameService) {}

   loadGamess$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromGamesAction.gamesTypeActions.LOAD_GAMES),
    exhaustMap(() => this.gameService.findAll()
    .pipe(
      map(payload =>
        fromGamesAction.loadGamesSuccess({ payload }),
        catchError(erro => of(fromGamesAction.loadGamesFail({ erro })))
        )
      )
    )
   )
  )

}
