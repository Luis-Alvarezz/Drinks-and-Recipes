// * rfc para cargar componente basico
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)
  
  useEffect(() => {
    loadFromStorage()
  }, [])
  return (
    <>
      {/* <div>Layout</div> */}
      <Header />

      <main className="container mx-auto py-16">
        <Outlet /> { /* ! Forma de Inyectar contenido independiente de cada pagina */}
      </main>

      <Modal />
    </>
  )
}
