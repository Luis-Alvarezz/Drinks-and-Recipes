// * RFC - Para crear estructura basica del componente
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import IndexPage from "./views/IndexPage"
import Layout from "./layouts/Layout"
import { lazy, Suspense } from "react"
// import GenerateIA from "./views/GenerateIA"
// import FavoritesPages from "./views/FavoritesPages"

const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPages = lazy(() => import('./views/FavoritesPages'))
const GenerateIAPage = lazy(() => import('./views/GenerateIAPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          {/* * RUTA 1 */}
          <Route path='/' element={
            <Suspense fallback='Cargando...'>
              <IndexPage />
            </Suspense>
          } index /> {/* index - Pagina Principal */}
          <Route path='/favoritos' element={
            <Suspense fallback='Cargando...'>
              <FavoritesPages />
            </Suspense>
          } />
          {/* RUTA 3 - Generador de IA */}
          <Route path="/generate-ia" element={
            <Suspense fallback='Cargando...'>
              <GenerateIAPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
