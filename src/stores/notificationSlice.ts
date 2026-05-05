import type { StateCreator } from "zustand"
import type { FavoritesSliceType } from "./favoritesSlice"

type Notification = {
  text: string,
  error: boolean
  show: boolean 
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
  hiddenNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get ) => ({
  // * States:
  notification: {
    text: '',
    error: false,
    show: false,
  },
  
  // * Actions:
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true
      }
    })
    
    setTimeout(() => {
      get().hiddenNotification()
    }, 3000);
  },

  hiddenNotification: () => {
    set({
      notification: {
        text: '',
        error: false,
        show: false
      }
    })
  }

})