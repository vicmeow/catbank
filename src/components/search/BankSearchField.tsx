import { SearchIcon } from "@sanity/icons"
import { Autocomplete, Label, Stack, Text } from "@sanity/ui"
import { Bank } from "../../types"
import { useContext, useMemo } from "react"
import { SearchContext } from "../../App"

type BankOption = {
    name: string
    value: string
}

const getSearchOptions = (banks: Bank[]): BankOption[] => {
    const uniqueBanks = new Set(banks.map(b => b.name))
    return Array.from(uniqueBanks).map(b => ({ name: b, value: b }))
}

export const BankSearchField = () => {
    const { allBanks = [], setUserBank } = useContext(SearchContext) || {}

    // Track which bank the user chose to highlight their bank in the results
    const onChangeBank = (value: string) => {
        if (setUserBank) {
            if (value === "") {
                setUserBank("alle")
            }
            setUserBank(value)
        }
    }

    const bankOptions = useMemo(() => getSearchOptions(allBanks), [allBanks])

    return <Stack space={2}>
        <Label>Nåvæerende bank</Label>
        <Text size={1} muted>Velg om du kun vil vise tilbud fra din nåværende bank</Text>
        <Autocomplete
            icon={SearchIcon}
            id="autocomplete-example"
            options={bankOptions}
            placeholder="Finn din bank"
            onChange={onChangeBank}
        />
    </Stack>
}