import type { StateCreator } from "zustand"
import type { RecipeInfer } from "../types/types"

export type FavoritesSliceType = {
  favorites: RecipeInfer[] // * Array porque pueden ser 2 o mas favoritos
  handleClickFavorite: (recipe: RecipeInfer) => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  // * STATES
  favorites: [],

  // * Acciones o Dispatch
  handleClickFavorite: (recipe) => {
    // console.log('Desde favoriteSlice, metodo handleClickFavorite',recipe);
    // console.log(get().favorites);
    if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
      // console.log('Si existe');
      set((state) => ({
        favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
      }))
    } else {
      // console.log('No existe');
      // * Al profe no le gusta, pero funciona:
      // set({
      //   favorites: [...get().favorites, recipe]
      // })
      // * Forma Limpia:
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }))
    }
  }
})