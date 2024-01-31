import { Flex, Inline, Label, Radio, Stack, Text } from "@sanity/ui"

type RadioOption = {
    value: string
    label: string
}
interface RadioField {
    label: string
    options: RadioOption[]
    onChange: React.FormEventHandler
    group: string
    selectedOption?: string
}


export const RadioField = ({ label, options, onChange, group, selectedOption }: RadioField) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e)
        }
    }

    return <Stack space={2}>
        <Label>{label}</Label>
        <Flex justify="space-between">
            {options.map(o =>
                <Inline space={2} key={o.value} >
                    <Radio name={group} value={o.value} checked={o.value === selectedOption} onChange={handleChange} />
                    <Text>{o.label}</Text>
                </Inline>)
            }
        </Flex>
    </Stack>
}