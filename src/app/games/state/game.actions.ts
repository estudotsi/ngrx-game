import { createAction, props } from "@ngrx/store";
import { Game } from "../../model/game.model";

export const enum gamesTypeActions{
  LOAD_GAMES = '[LOAD_GAMES] LOAD GAMES',
  LOAD_GAMES_SUCCESS = '[LOAD_GAMES_SUCCESS] LOAD GAMES SUCCESS',
  LOAD_GAMES_FAIL = '[LOAD_GAMES_FAIL] LOAD GAMES FAIL',
}

export const loadGames = createAction( gamesTypeActions.LOAD_GAMES );

export const loadGamesSuccess = createAction( gamesTypeActions.LOAD_GAMES_SUCCESS, props<{ payload: Game[]}>() );

export const loadGamesFail = createAction( gamesTypeActions.LOAD_GAMES_FAIL, props<{ erro: string}>() );
