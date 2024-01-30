import { Box, Card, Container, Grid, Heading, Stack, Text } from '@sanity/ui'
import './index.css'
import { SearchForm, SearchResults } from './components/search'
import React, { useEffect, useState } from 'react'
import { getAllBanks, getFilteredBanks } from './utils'
import { Bank } from './types'
import styled from 'styled-components'

interface SearchContext {
  allBanks: Bank[] | undefined
  filteredBanks: Bank[] | undefined
  userAge: number
  userAmount: number
  userBank: string | null
  marketArea: string
  setUserAge: React.Dispatch<React.SetStateAction<number>>
  setUserAmount: React.Dispatch<React.SetStateAction<number>>
  setUserBank: React.Dispatch<React.SetStateAction<string | null>>
  setFilteredBanks: React.Dispatch<React.SetStateAction<Bank[]>>
  setMarketArea: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContext | null>(null)

const StyledBox = styled(Box)`
  overflow: scroll;
  max-height: 100vh;
`

function App() {

  const [banks, setBanks] = useState<Bank[] | []>([])
  const [filteredBanks, setFilteredBanks] = useState<Bank[] | []>([])
  const [userAge, setUserAge] = useState<number>(0)
  const [userAmount, setUserAmount] = useState<number>(0)
  const [userBank, setUserBank] = useState<string | null>(null)
  const [marketArea, setMarketArea] = useState<string>('alle')

  const context: SearchContext = {
    allBanks: banks,
    filteredBanks,
    userAge,
    userAmount,
    userBank,
    marketArea: marketArea,
    setUserAge,
    setUserAmount,
    setUserBank,
    setFilteredBanks,
    setMarketArea
  }

  useEffect(() => {
    const banks = getAllBanks()
    setBanks(banks)
  }, [])

  useEffect(() => {
    if (!userAge) {
      // dont do anything if we do not have an age
      return
    }
    const searchFilters = {
      userAge,
      userBank,
      marketArea
    }
    const newBanks = getFilteredBanks(banks, searchFilters)
    setFilteredBanks(newBanks)
  }, [banks, userAge, userAmount, userBank, marketArea])

  return (
    <SearchContext.Provider value={context}>
      <Container width={4}>
        <Card height="fill" padding={4}>
          <Grid columns={[1, 1, 1, 3]} gap={2} paddingY={6}>
            <Stack space={6} padding={4}>
              <Stack space={4}>
                <Heading>Finn din nye sparekonto 💰</Heading>
                <Text>Fyll ut skjemaet for å finne banken med den beste sparekontoen for deg. Du vil vel spare mest mulig penger?
                </Text>
              </Stack>
              <SearchForm />
            </Stack>
            <StyledBox columnStart={[1, 1, 1, 2]} columnEnd={[1, 1, 1, 4]}>
              {/* TODO: add loading state */}
              <SearchResults />
            </StyledBox>
          </Grid>
        </Card>
      </Container>
    </SearchContext.Provider>
  )
}

export default App
