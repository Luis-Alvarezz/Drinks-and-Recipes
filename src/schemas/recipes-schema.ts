import z from "zod";

// ! 1.- Creando el ESQUEMA para la API al obtener las categorias
export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})