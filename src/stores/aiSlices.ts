import { StateCreator } from "zustand"

export type AiSliceType = {
  recipe: string
}
export const createAISlice: StateCreator<AiSliceType, [], [], AiSliceType> = () => ({
  recipe: ''
})