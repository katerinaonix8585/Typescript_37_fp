import { TextAreaContainer, TextAreaLabel } from "./styles";
import { TextAreaProps } from "./types";

function TextArea({placeholder, name, label}: TextAreaProps) {
    return (
        <TextAreaContainer>
            <TextAreaLabel>{label}</TextAreaLabel>
            <TextArea placeholder={placeholder} name={name} label={""}></TextArea>
        </TextAreaContainer>
    )
}

export default TextArea;