import { createOpenRouter } from "@openrouter/ai-sdk-provider";


export const openRouter = createOpenRouter({
  // * Objeto de configuracion
  apiKey: import.meta.env.VITE_OPENROUTER_KEY
})