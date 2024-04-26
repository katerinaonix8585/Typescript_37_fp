import { InputComponent, InputComponentContainer, InputComponentLabel } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, onInputChange } : InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponent        
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </InputComponentContainer>
  );
}

export default Input;
