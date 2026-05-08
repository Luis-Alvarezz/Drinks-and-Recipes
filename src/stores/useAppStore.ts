// * STORE PRINCPAL - Recibe los SLICES para Unificar el Store
import { create } from "zustand";
import { createRecipiesSlice, type RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";
import { createAISlice, type AiSliceType } from "./aiSlices";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType & AiSliceType>()(devtools((...a) => ({
  ...createRecipiesSlice(...a), // * Llamado con COPIA del recipeSlice y pasamos argumento o metodos de set, get, etc. 
  ...createFavoritesSlice(...a), // * Llamado con COPIA del favoritesSlice y pasamos argumento o metodos de set, get, etc. 
  ...createNotificationSlice(...a), // * Llamado con COPIA del notificationSlice y pasamos argumento o metodos de set, get, etc.
  ...createAISlice(...a) // * Llamando con COPIA del aiSlice y pasamos argumento o metodos set, get y API
})))