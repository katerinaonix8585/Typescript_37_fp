export interface TextAreaProps {
    placeholder: string,
    name: string,
    label: string,
    value?: string,
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}