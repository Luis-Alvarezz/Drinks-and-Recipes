import type { StateCreator } from "zustand"
import type { RecipeInfer } from "../types/types"
import { createRecipiesSlice, type RecipiesSliceType } from "./recipeSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"

export type FavoritesSliceType = {
  favorites: RecipeInfer[] // * Array porque pueden ser 2 o mas favoritos
  handleClickFavorite: (recipe: RecipeInfer) => void
  favoriteExists: (drinkID: RecipeInfer['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipiesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  // * STATES
  favorites: [],

  // * Acciones o Dispatch
  handleClickFavorite: (recipe) => {
    // console.log('Desde favoriteSlice, metodo handleClickFavorite',recipe);
    // console.log(get().favorites);
    if (get().favoriteExists(recipe.idDrink)) {
      // console.log('Si existe');
      set((state) => ({
        favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
      }))
      createNotificationSlice(set, get, api).showNotification({ 'text': 'Bebida removida de favoritos', 'error': false })
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
      createNotificationSlice(set, get, api).showNotification({ 'text': 'Bebida agregada a los favoritos', 'error': false })
    }
    createRecipiesSlice(set, get, api ).closeModal()
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },

  // * Accion 2.- Verificar si ya esta agregado en Favoritos la bebida
  favoriteExists: (drinkID) => {
    return get().favorites.some(favorite => favorite.idDrink === drinkID)
  },

  // * Accion 3.- Cargar favoritos de LocalStorage y mantenorlos en REDUX
  loadFromStorage: () => {
    const storeagedFavorites = localStorage.getItem('favorites')
    if (storeagedFavorites) {
      set({
        favorites: JSON.parse(storeagedFavorites)
      })
    }
  }
})