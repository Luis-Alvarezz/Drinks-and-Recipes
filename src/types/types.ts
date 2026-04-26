import z from "zod"
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schema"

// ! 2. Creando el INFERIR TYPE para la API al obtener las categorias
export type Categories = z.infer<typeof CategoriesAPIResponseSchema> // * Antes: Category[] -> Pero el arreglo viene dentro de la resp de la API