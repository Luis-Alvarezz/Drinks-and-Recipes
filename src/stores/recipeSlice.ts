import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types/types"


export type RecipiesSliceType = {
  categories: Categories,
  fetchCategories: () => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = (set) => ({
  // categories: [], // * STATE
  categories: {
    drinks: []
  },

  // * Acciones (DISPATCH)
  fetchCategories: async() => {
    const APIResponseCategories = await getCategories()
    // console.log('Respuesta de API desde recipeSlice: ',APIResponseCategories);
    set(() => ({
      categories: APIResponseCategories
    }))
  }
})