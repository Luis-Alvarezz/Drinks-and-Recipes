// * rfc -> Para crear componente base

import type { DrinkInfer } from "../types/types"

type DrinkCardProps = {
  drink: DrinkInfer
}

export default function DrinkCard({drink}: DrinkCardProps) {
  return (
    <div className="border shadow-lg hover:scale-105 transition-transform ">
      <div className="overflow-hidden">
        <img 
          src={drink.strDrinkThumb}
          alt={`Imagen de: ${drink.strDrink}`}
          className="hover:scale-110 transition-transform hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>

        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
        >
          Ver Recetas
        </button>
      </div>
    </div>
  )
}
