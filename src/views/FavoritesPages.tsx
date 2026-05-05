import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { NavLink } from "react-router-dom"


export default function FavoritesPages() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])
  
  return (
    <>
    {
      hasFavorites ? (
        <>
          <h1 className="text-6xl font-extrabold text-center m-0">Favoritos</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {
              favorites.map(drink => 
                <DrinkCard 
                  key={drink.idDrink}
                  drink={drink}  
                />
              )
            }
          </div>
        </>
      ) : (
        <div>
          <p className="text-xl text-center font-bold text-slate-700">Aún no hay favoritos, comienza agregando en la seccion de
            <NavLink
              to='/'
              className='text-cyan-600'
            >
              {' '}Inicio
            </NavLink>
          </p>
        </div>
      )
    }
    </>
  )
}
