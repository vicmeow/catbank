import { CreditCardIcon, IceCreamIcon, PinIcon, TrolleyIcon } from "@sanity/icons"
import { Text, Box, Inline, Label, Tooltip } from "@sanity/ui"

const detailIcon = (detailType: string): React.ReactNode => {
    if (detailType) {
        switch (detailType) {
            case 'markedsområde':
                return <PinIcon />
            case 'produktkrav':
                return <TrolleyIcon />
            case 'medlemskapskrav':
                return <CreditCardIcon />
            default: <IceCreamIcon />
        }
    }
    return <IceCreamIcon />

}

export const Detail = ({ label, value, info }: { label: string, value: string | boolean, info?: string }) => {
    return (
        <Tooltip
            content={
                <Box padding={1} style={{ maxWidth: 300 }}>
                    <Text muted size={1}>
                        {info}
                    </Text>
                </Box>
            }
            arrow
            fallbackPlacements={['right', 'left']}
            placement="top"
            portal
            disabled={!info}

        >
            <Inline space={2}>
                <Label size={4} aria-hidden>{detailIcon(label)}</Label>
                <Label aria-label={label}>{value}</Label>
            </Inline>
        </Tooltip>

    )
}