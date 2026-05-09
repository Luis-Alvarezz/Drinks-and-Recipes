import type { StateCreator } from "zustand"

export type AiSliceType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}
export const createAISlice: StateCreator<AiSliceType, [], [], AiSliceType> = () => ({
  recipe: '',

  generateRecipe: async (prompt) => {
    console.log('Desde genereateRecipe', prompt);
  }
})