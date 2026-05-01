import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema } from "../schemas/recipes-schema";
import type { SearchFilterInfer } from "../types/types";

export async function getCategories() {
  // console.log('Desde Servicio RecipeServices');
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  // console.log(url);
  // console.log(data);
  // console.log(data.data);
  // console.log(data.data.drinks);
  const { data } = await axios(url)
  const result = CategoriesAPIResponseSchema.safeParse(data)
  // console.log('Resp API RecipeService: ', result);
  if (result.success) {
    return result.data
  }
}

// ! Metodo 2, Obtener recetas en base a la 'category' e 'ingredient' que el Usuario Selecciono
export async function getRecipies(filters: SearchFilterInfer) {
  // console.log('Filtros de Usuario desde getRecipies: ', filters);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  // console.log(url);
  const { data } = await axios (url)
  // console.log(data); // * { drinks : (100) } -> drinks : (100) [{…}, {…}, ... {...}] 
  const result = DrinksAPIResponseSchema.safeParse(data)
  // console.log(result); // * {success: true, data: {…}} ->  drinks : (100) [{…}, {…}, ... , {…}] 
  
  if (result.success) {
    return result.data
  }
}