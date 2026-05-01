import type { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import type { CategoriesInfer, DrinksInfer, SearchFilterInfer } from "../types/types"


export type RecipiesSliceType = {
  categories: CategoriesInfer,
  drinksResAPI: DrinksInfer,
  fetchCategories: () => Promise<void>
  fetchSearchRecipies: (searchFilters: SearchFilterInfer) => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = (set) => ({
  // categories: [], // * STATE
  categories: {
    drinks: []
  },

  drinksResAPI: {
    drinks: []
  },

  // * Acciones (DISPATCH)
  fetchCategories: async() => {
    const APIResponseCategories = await getCategories()
    // console.log('Respuesta de API desde recipeSlice: ',APIResponseCategories);
    set(() => ({
      categories: APIResponseCategories
    }))
  },

  // * Accion 2 - Consultar las Recetas por medio la API
  fetchSearchRecipies: async(searchFilters) => {
    // console.log('Desde Accion 2 searchRecipies, recipeSlice');
    // console.log(searchFilters); // * Ya se recibe ingredient y category de Form
    const drinks = await getRecipies(searchFilters)
    // console.log(drinks); // * {drinks: Array(100)}
    set(() => ({
      drinksResAPI: drinks
    }))
  }
})