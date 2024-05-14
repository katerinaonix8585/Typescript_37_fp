export interface TextAreaProps {
    placeholder: string,
    name: string,
    label: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}