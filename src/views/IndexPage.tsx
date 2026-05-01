// * RFC - Para cargar plantilla inicial
import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinksResAPI)

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])

  return (
    <>
      {
        hasDrinks ? (
          <>
            <h1 className="text-6xl font-extrabold">Recetas</h1>
            {
              drinks.drinks.map(drink => {
                return <DrinkCard
                          key={drink.idDrink}
                          drink={drink}
                        />
              })
            }
          </>
        ) : 
        (
          <h1 className="my-10 text-center text-2xl text-red-600 font-bold">No hay resultados aún, llena el formulario para buscar recetas</h1> 
        )
      }
    </>
  )
}
