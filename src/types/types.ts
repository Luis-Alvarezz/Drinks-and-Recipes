import z from "zod"
import { CategoriesAPIResponseSchema, SearchFilterAPIResponseSchema } from "../schemas/recipes-schema"

// ! 2. Creando el INFERIR TYPE para la API al obtener las categorias
export type CategoriesInfer = z.infer<typeof CategoriesAPIResponseSchema> // * Antes: Category[] -> Pero el arreglo viene dentro de la resp de la API

// ! 2.1 Creando el INFER TYPE para la API al obtener las recetas
export type SearchFilterInfer = z.infer<typeof SearchFilterAPIResponseSchema>
