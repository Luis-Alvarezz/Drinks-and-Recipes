// * rfc para cargar componente basico
// import { Link, NavLink } from "react-router-dom"
import React, { useEffect, useMemo, useState } from "react"
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
  const categories = useAppStore(state => state.categories)
  // ! Paso 1: Crear el STATE para los campos, en base a los 'name' del Formulario
  const [searchFilters, setSearchFilters] = useState({
    // * Son los name del Formulario:
    ingredient: '',
    category: ''
  })
  
  useEffect(() => {
    fetchCategoriesAPIResponse()
  }, [fetchCategoriesAPIResponse])

  // ! Paso 2: Metodo para escribir en el STATE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }
  
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
                  // onChange={e => } // * Para tomar el TYPE -> React.ChangeEvent<HTMLInputElement, HTMLInputElement>
                  onChange={handleChange}
                  value={searchFilters.ingredient}
                />
            </div>

            <div className="space-y-4">
              <label 
                htmlFor="category"
                className="text-white uppercase font-extrabold text-lg"
                >
                  Categoria
                </label>

                <select
                  id="category"
                  name="category" // * Para colocarlo en el STATE
                  className="p-3 w-full rounded-lg focus:outline-none"
                  onChange={handleChange}
                  value={searchFilters.category}
                >
                  <option value="">-- Seleccione una categoría--</option>
                  {
                    // * OPC 1:
                    // categories.drinks.map(category => (
                    //   <option value="">{category.strCategory}</option>
                    // ))
                    // * OPC 2:
                     categories.drinks.map(category => {
                     return <option value={category.strCategory} key={category.strCategory}>{category.strCategory}</option>
                    })
                  }
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
