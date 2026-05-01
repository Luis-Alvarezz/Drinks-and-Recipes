// * RFC - Para cargar plantilla inicial
import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinksResAPI)

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])

  return (
    <>
      <h1 className="text-6xl font-extrabold text-center text-green-700">Recetas</h1>
      {
        hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {
              drinks.drinks.map(drink => {
                return <DrinkCard
                          key={drink.idDrink}
                          drink={drink}
                        />
              })
            }
          </div>
        ) : 
        (
          <h1 className="my-10 text-center text-2xl text-red-600 font-bold">No hay resultados aún, llena el formulario para buscar recetas</h1> 
        )
      }
    </>
  )
}
