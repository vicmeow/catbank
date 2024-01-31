import { Button, Card, Flex, Heading, Inline, Stack, Text } from "@sanity/ui"
import { EarthGlobeIcon } from "@sanity/icons"
import { Detail, OfferDetail } from "."
import styled from "styled-components"
import { Bank } from "../types"
import { useContext } from "react"
import { SearchContext } from "../App"
import { calculateEarnings } from "../utils"

const StyledCard = styled(Card)`
    min-width: 400px;
    max-width: 440px;
`

export const BankCard = ({ name, product, url, interestRate, markedsomraade,
    produktkrav,
    produktkrav_tekst,
    medlemskapskrav, medlemskapskrav_tekst }: Bank) => {

    // Get the current form values from our context
    const { userAge, userAmount = 0 } = useContext(SearchContext) || {}

    // Calculate the yearly earnings using the amount entered by the user
    // and the bank offer's interest rate
    const earnings = userAge && calculateEarnings(userAmount, interestRate)

    return <>
        <StyledCard padding={4} radius={4} shadow={2} marginRight={4} marginBottom={4} flex={1}>
            <Flex>
                <Stack space={4} flex={1}>
                    <Flex justify="space-between">
                        <Stack space={2}>
                            <Heading>{product}</Heading>
                            <Text>{name}</Text>
                        </Stack>
                        {url && <Button as="a" mode="bleed" icon={<EarthGlobeIcon />} fontSize={2} title="Til bankens hjemmeside" href={url} target="_blank" />}
                    </Flex>
                    <Inline space={4}>
                        <OfferDetail label="Effektiv rente" value={`${interestRate} %`} />
                        {userAmount && <OfferDetail label="Årlig avkastning" value={`${earnings},-`} />}
                    </Inline>
                    <Inline space={4}>
                        <Detail label="markedsområde" value={markedsomraade} />
                        {/* @TODO possibly add tooltip with info? */}
                        {produktkrav && <Detail label="produktkrav" value="Produktkrav" info={produktkrav_tekst} />}
                        {/* @TODO possibly add tooltip with info? */}
                        {medlemskapskrav && <Detail label="medlemskapskrav" value="Medlemskapskrav" info={medlemskapskrav_tekst} />}
                    </Inline>
                </Stack>

            </Flex>
        </StyledCard>
    </>
}