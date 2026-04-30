import z from "zod";

// ! 1.- Creando el ESQUEMA para la API al obtener las categorias
export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})

// ! 1.2 Creando el ESQUEMA para la API al obtener las Recetas
export const SearchFilterAPIResponseSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})