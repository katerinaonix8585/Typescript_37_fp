export type InputType = "text" | "password" | "email" | undefined;

export interface InputProps {
    name: string,
    type: InputType,
    placeholder: string,
    label: string,
    onInputChange: () => void
  }