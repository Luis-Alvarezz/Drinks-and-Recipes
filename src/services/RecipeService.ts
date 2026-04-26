import axios from "axios";
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schema";

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