import { CreditCardIcon, IceCreamIcon, PinIcon, TrolleyIcon } from "@sanity/icons"
import { Inline, Label } from "@sanity/ui"

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

export const Detail = ({ label, value }: { label: string, value: string | boolean }) => {
    return (
        value && <Inline space={2}>
            <Label size={4} aria-hidden>{detailIcon(label)}</Label>
            <Label aria-label={label}>{value}</Label>
        </Inline>
    )
}