import z from "zod"
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema, SearchFilterResponseSchema } from "../schemas/recipes-schema"

// ! 2. Creando el INFERIR TYPE para la API al obtener las categorias
export type CategoriesInfer = z.infer<typeof CategoriesAPIResponseSchema> // * Antes: Category[] -> Pero el arreglo viene dentro de la resp de la API

// ! 2.1 Creando el INFER TYPE para la API al obtener las recetas
export type SearchFilterInfer = z.infer<typeof SearchFilterResponseSchema>

// ! 3.1 Creando INFER TYPE para las Bebidas obtenidas por la API
export type DrinksInfer = z.infer<typeof DrinksAPIResponseSchema>

// ! 4.1 Creando INFER TYPE para componente DrinkCard y leer bebida por bebida
export type DrinkInfer = z.infer<typeof DrinkAPIResponseSchema>

// ! 5.1. Creando INFER TYPE para resp de API al obtener detalles de bebida por ID
export type RecipeInfer = z.infer<typeof RecipeAPIResponseSchema>