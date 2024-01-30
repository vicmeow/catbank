import React from "react"
import { SearchContext } from "../App"
import { Bank } from "../types"

export function useBanks(): Bank[] {
  const context = React.useContext(SearchContext)
  return context?.allBanks || []
}