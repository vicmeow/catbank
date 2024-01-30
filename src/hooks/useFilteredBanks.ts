import React from "react"
import { SearchContext } from "../App"
import { Bank } from "../types"

export function useFilteredBanks(): Bank[] {
  const { filteredBanks } = React.useContext(SearchContext) || {}
  return filteredBanks || []
}