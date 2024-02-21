import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameState } from "./game.reducer";

const getGamesFeatureState = createFeatureSelector<GameState>(
  'games'
)

export const getGames = createSelector(
  getGamesFeatureState,
  (state: GameState) => state.games
)
