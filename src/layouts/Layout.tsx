// * rfc para cargar componente basico
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      {/* <div>Layout</div> */}
      <Header />

      <main className="container mx-auto py-16">
        <Outlet /> { /* ! Forma de Inyectar contenido independiente de cada pagina */}
      </main>
    </>
  )
}
