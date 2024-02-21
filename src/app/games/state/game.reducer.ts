import { createReducer, on } from "@ngrx/store";
import { Game } from "../../model/game.model";
import * as fromGameActions from "../state/game.actions"

export interface GameState {
  games: Game[],
  game: Game | null,
  error: string | null,
}

const initialState: GameState = {
  games: [],
  game: null,
  error: ''
}

export const gameReducer = createReducer(
  initialState,
  on(fromGameActions.loadGamesSuccess, (state, { payload } ) => ({
    ...state,
    games: payload,
    error: '' })),
)




