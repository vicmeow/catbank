import { Flex, Inline, Label, Radio, Stack, Text } from "@sanity/ui"
import { useContext } from "react"
import { SearchContext } from "../../App"


export const RadioField = ({ label, options }: { label: string, options: { value: string, label: string }[] }) => {
    const { marketArea, setMarketArea } = useContext(SearchContext) || {}

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (setMarketArea) {
            setMarketArea((e.target as HTMLInputElement).value)
        }
    }

    return <Stack space={2}>
        <Label>{label}</Label>
        <Flex justify="space-between">
            {options.map(o =>
                <Inline space={2} key={o.value} >
                    <Radio name="marketarea" value={o.value} checked={o.value === marketArea} onChange={handleChange} />
                    <Text>{o.label}</Text>
                </Inline>)
            }
        </Flex>
    </Stack>
}