import type { StateCreator } from "zustand"
import type { RecipeInfer } from "../types/types"

export type FavoritesSliceType = {
  favorites: RecipeInfer[] // * Array porque pueden ser 2 o mas favoritos
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = () => ({
  favorites: []
})