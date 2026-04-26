// * STORE PRINCPAL - Recibe los SLICES para Unificar el Store
import { create } from "zustand";
import { createRecipiesSlice, type RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
  ...createRecipiesSlice(...a) // * Llamado con COPIA del recipeSlice y pasamos argumento o metodos de set, get, etc. 
})))