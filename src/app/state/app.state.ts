import { ActionReducerMap } from "@ngrx/store";
import { GameState, gameReducer } from "../games/state/game.reducer";
import { Game } from "../model/game.model";
import { GameEffects } from "../games/state/game.effects";

export interface AppState{
  games:  GameState
}

export const appReducer: ActionReducerMap<AppState> = {
  games: gameReducer
}

export const appEffects = [
  GameEffects
]
