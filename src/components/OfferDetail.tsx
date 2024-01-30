import { Label, Stack, Text } from "@sanity/ui"


export const OfferDetail = ({ label, value }: { label: string, value: string | undefined }) => {
    return (
        <Stack space={2}>
            <Label>{label}</Label>
            <Text size={4}>{value}</Text>
        </Stack>
    )
}