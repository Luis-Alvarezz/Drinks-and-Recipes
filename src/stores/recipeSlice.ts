import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = []

export type RecipiesSliceType = {
  categories: Category[],
  fetchCategories: () => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = () => ({
  categories: [], // * STATE

  // * Acciones (DISPATCH)
  fetchCategories: async() => {
    getCategories()
  }
})