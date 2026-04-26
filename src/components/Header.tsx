// * rfc para cargar componente basico
// import { Link, NavLink } from "react-router-dom"
import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";
// import { Link } from "react-router-dom"



export default function Header() {
  const {pathname} = useLocation()

  const isHome = useMemo(() => pathname === '/', [pathname])
  // console.log(isHome);
  
  const fetchCategoriesAPIResponse = useAppStore((state) => state.fetchCategories)
  // const categories = useAppStore((state) => state.categories)
  // console.log('Desde Header, tomando resp API de Store:', categories);
  
  useEffect(() => {
    fetchCategoriesAPIResponse()
  }, [fetchCategoriesAPIResponse])
  
  return (
    <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-4 py-10">
        <div className="flex justify-between items-center">
          <div>
            <img src="../public/logo.svg" alt="Logotipo" className="w-32"/>
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({isActive}) => 
                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
              }
              >
                Inicio
              </NavLink>
            <NavLink
              to="/favoritos"
              className={({isActive}) => 
                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        { isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-10 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label 
                htmlFor="ingredient"
                className="text-white uppercase font-extrabold text-lg"
                >
                  Nombre o Ingredientes
                </label>

                <input
                  id="ingredient"
                  type="text"
                  name="ingredient" // * Para colocarlo en el STATE
                  className="p-3 w-full rounded-lg focus:outline-none"
                  placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe, etc."
                />
            </div>

            <div className="space-y-4">
              <label 
                htmlFor="ingredient"
                className="text-white uppercase font-extrabold text-lg"
                >
                  Categoria
                </label>

                <select
                  id="ingredient"
                  name="ingredient" // * Para colocarlo en el STATE
                  className="p-3 w-full rounded-lg focus:outline-none"
                >
                  <option value="">-- Seleccione una categoría--</option>
                </select>
            </div>

            <input 
              type="submit"
              value='Buscar Recetas'
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 uppercase rounded-lg transition-all duration-300 ease-in"
            />
          </form>
        )}

      </div>
    </header>
  )
}
