import type { StateCreator } from "zustand"
import { getCategories, getDetailsRecipieByID, getRecipies } from "../services/RecipeService"
import type { CategoriesInfer, DrinksInfer, SearchFilterInfer, DrinkInfer, RecipeInfer } from "../types/types"


export type RecipiesSliceType = {
  categories: CategoriesInfer,
  drinksResAPI: DrinksInfer,
  selectedRecipie: RecipeInfer
  modal: boolean
  fetchCategories: () => Promise<void>
  fetchSearchRecipies: (searchFilters: SearchFilterInfer) => Promise<void>
  selectRecipeID: (id: DrinkInfer['idDrink']) => Promise<void>
  closeModal: () => void
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = (set) => ({
  // categories: [], // * STATE
  categories: {
    drinks: []
  },

  drinksResAPI: {
    drinks: []
  },

  // selectedRecipie: {}, // * Necesita colocat TODAS las propiedades, para ello:
  selectedRecipie: {} as RecipeInfer,
  modal: false,

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
  },

  // * Accion 3 - Consultar los detalles de una receta por medio la API
  selectRecipeID: async(drinkID) => {
    // console.log('Desde selectRecipeID', drinkID);
    const drinkDetails = await getDetailsRecipieByID(drinkID)
    // console.log('Descrpcion de bebida desde selectRecipeID', drinkDetails);
    set({
      selectedRecipie: drinkDetails,
      modal: true
    })
  },

  // * Accion 4.- Cerrar ventana modal
  closeModal:() => {
    set({
      modal: false,
      selectedRecipie: {} as RecipeInfer
    })
  }
})