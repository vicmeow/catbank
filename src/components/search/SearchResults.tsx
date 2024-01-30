import { Flex, Heading, Stack, Text } from "@sanity/ui"
import { BankCard } from ".."
import { useContext } from "react"
import { SearchContext } from "../../App"
import styled from "styled-components"
import { useFilteredBanks } from "../../hooks/useFilteredBanks"

const StyledFlex = styled(Flex)`
    overflow: scroll;
    max-height: 100%;
`


export const SearchResults = () => {
    const { userBank } = useContext(SearchContext) || {}
    const filteredBanks = useFilteredBanks()
    return filteredBanks?.length > 0 ?
        <StyledFlex wrap="wrap" padding={4} paddingBottom={6}>
            {filteredBanks.map((b, i) => <BankCard selected={userBank === b.name} key={i} {...b} />)}
        </StyledFlex>
        : <StyledFlex justify="center" direction="column" align="center">
            <Stack space={4} padding={4}>
                <Heading size={4} align="center">
                    😢
                </Heading>
                <Text align="center" muted size={1}>Synd for deg, fant ingen banker som matchet!</Text>
            </Stack>
        </StyledFlex>

}