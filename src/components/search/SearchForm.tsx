import { Box, Grid } from "@sanity/ui"
import { InputField, BankSearchField, RadioField } from "."
import { NumberIcon } from "@sanity/icons"
import { useContext } from "react"
import { SearchContext } from "../../App"

const radioOptions = [
    { label: 'Alle banker', value: 'alle' },
    { label: 'Lokalt/regionalt', value: 'lokalt/regionalt' },
    { label: 'Landsdekkende', value: 'landsdekkende' }
]


export const SearchForm = () => {

    const { setUserAge, setUserAmount, setMarketArea, marketArea } = useContext(SearchContext) || {}


    const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setUserAge) {
            setUserAge(Number(e.target.value))
        }
    }

    const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setUserAmount) {
            setUserAmount(Number(e.target.value))
        }
    }

    const onMarketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setMarketArea) {
            setMarketArea(String(e.target.value))
        }
    }

    return <Grid gap={4} columns={[1, 2]}>
        <InputField label="Alder" description="Er du blitt gammel enda?" inputType="number" onChange={onAgeChange} icon={NumberIcon} />
        <InputField label="Innestående beløp" description="Har du vært flink og spart penger?" inputType="number" onChange={onAmountChange} icon={NumberIcon} />
        <Box columnStart={1} columnEnd={3}>
            <BankSearchField />
        </Box>
        <Box columnStart={1} columnEnd={3}>
            <RadioField label="Markedsområde" group="market" options={radioOptions} onChange={onMarketChange} selectedOption={marketArea} />
        </Box>
    </Grid>
}