// * STORE PRINCPAL - Recibe los SLICES para Unificar el Store
import { create } from "zustand";
import { createRecipiesSlice, type RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipiesSlice(...a), // * Llamado con COPIA del recipeSlice y pasamos argumento o metodos de set, get, etc. 
  ...createFavoritesSlice(...a), // * Llamado con COPIA del favoritesSlice y pasamos argumento o metodos de set, get, etc. 
  ...createNotificationSlice(...a) // * Llamado con COPIA del notificationSlice y pasamos argumento o metodos de set, get, etc. 
})))