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

// ! 1.4 Creando ESQUEMA para respuesta de la API al obtener los detalles de una Bebida por ID
export const RecipeAPIResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(), //* nullable -> Puede o no ser NULL
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});