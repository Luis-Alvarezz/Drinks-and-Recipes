// * rfc para cargar componente basico
type ChildrenProp = {
  children: React.ReactNode
}

export default function ErrorMessage({children}: ChildrenProp) {
  return (
    <div className="bg-red-600 p-2 text-white text-center text-base uppercase font-bold"> { children } </div>
  )
}
