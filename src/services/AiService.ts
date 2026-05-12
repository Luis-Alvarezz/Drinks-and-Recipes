import { streamText } from "ai" // * Esta dependencia resume lo que viene en mutiples lineas de codigo
import { openRouter } from "../lib/ai"
// * SI se hiciera con API Refenrence en el apartado de Streaming (mucho if, while, etc)


export async function generateRecipe(prompt: string) {
  // console.log('Desde servicio generateRecipe: ', prompt);
  const resul = streamText({
    // * Objeto de configuracion:
    // model: openRouter('meta-llama/llama-3.2-3b-instruct:free'),
    model: openRouter('openai/gpt-oss-20b:free'),
    prompt: prompt
  })
  // console.log(resul);
  return resul.textStream
}