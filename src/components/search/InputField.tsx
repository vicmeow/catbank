import { IconComponent } from "@sanity/icons"
import { Text, Label, Stack, TextInput, TextInputType } from "@sanity/ui"

type InputField = {
    label: string,
    inputType: TextInputType
    onChange: React.FormEventHandler
    icon: IconComponent
    description: string
}

let inputTimeout: ReturnType<typeof setTimeout>

export const InputField = ({ label, inputType, onChange, icon, description }: InputField) => {

    // Throttle the input to lessen perf impact
    const throttleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(inputTimeout)
        inputTimeout = setTimeout(() => {
            onChange(e)
        }, 500)
    }

    return <Stack space={2}>
        <Label>{label}</Label>
        <Text size={1} muted>{description}</Text>
        <TextInput type={inputType} onChange={throttleInput} iconRight={icon} />
    </Stack>
}