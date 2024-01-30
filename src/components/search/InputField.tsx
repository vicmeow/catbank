import { IconComponent } from "@sanity/icons"
import { Label, Stack, TextInput, TextInputType } from "@sanity/ui"

type InputField = {
    label: string,
    inputType: TextInputType
    handleChange: React.FormEventHandler
    icon: IconComponent
}

let inputTimeout: ReturnType<typeof setTimeout>

export const InputField = ({ label, inputType, handleChange, icon }: InputField) => {

    // Throttle the input to lessen perf impact
    const throttleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(inputTimeout)
        inputTimeout = setTimeout(() => {
            handleChange(e)
        }, 500)
    }

    return <Stack space={2}>
        <Label>{label}</Label>
        <TextInput type={inputType} onChange={throttleInput} iconRight={icon} />
    </Stack>
}