import z from "zod";

// ! 1.- Creando el ESQUEMA para la API al obtener las categorias
export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})

// ! 1.2 Creando el ESQUEMA para el envio de Form por parte del usuario al obtener las Recetas
export const SearchFilterResponseSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})

// ! 1.4 Creando ESQUEMA para respuesta interna de la API con cada Bebida
export const DrinkAPIResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string()
})

// ! 1.3.- Creando ESQUEMA para respuesta de API al obtener Bebidas
export const DrinksAPIResponseSchema = z.object({
  drinks: z.array(DrinkAPIResponseSchema)
})