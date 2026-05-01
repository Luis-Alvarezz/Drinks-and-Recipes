// * rfc -> Para crear componente base

import type { DrinkInfer } from "../types/types"

type DrinkCardProps = {
  drink: DrinkInfer
}

export default function DrinkCard({drink}: DrinkCardProps) {
  return (
    <div>
      <h1>Drink</h1>
      <p>{drink.strDrink}</p>
    </div>
  )
}
