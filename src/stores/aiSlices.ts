import type { StateCreator } from "zustand"
import { generateRecipe } from "../services/AiService"

export type AiSliceType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}
export const createAISlice: StateCreator<AiSliceType, [], [], AiSliceType> = (set) => ({
  recipe: '',

  generateRecipe: async (prompt) => {
    // console.log('Desde genereateRecipe', prompt);
    set({recipe: ''})
    const data  = await generateRecipe(prompt)
    for await (const textPart of data) {
      // console.log(textPart);
      set((state) =>  ({
        recipe: state.recipe + textPart // * Copia de recipe + respu sig
      }))
    }
  }
})