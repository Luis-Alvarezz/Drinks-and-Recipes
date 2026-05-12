import type { StateCreator } from "zustand"
import { generateRecipe } from "../services/AiService"

export type AiSliceType = {
  recipe: string
  isGenerating: boolean
  generateRecipe: (prompt: string) => Promise<void>
}
export const createAISlice: StateCreator<AiSliceType, [], [], AiSliceType> = (set) => ({
  recipe: '',
  isGenerating: false,

  generateRecipe: async (prompt) => {
    // console.log('Desde genereateRecipe', prompt);
    set({recipe: '', isGenerating: true})
    const data  = await generateRecipe(prompt)
    for await (const textPart of data) {
      // console.log(textPart);
      set((state) =>  ({
        recipe: state.recipe + textPart // * Copia de recipe + respu sig
      }))
    }
    set({ isGenerating: false })
  }
})