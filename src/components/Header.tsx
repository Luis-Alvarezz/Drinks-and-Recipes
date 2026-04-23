// * rfc para cargar componente basico
// import { Link, NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"
// import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-4 py-16">
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
      </div>
    </header>
  )
}
