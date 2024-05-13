import { StyledTextArea, TextAreaContainer, TextAreaLabel } from "./styles";
import { TextAreaProps } from "./types";

function TextArea({placeholder, name, label}: TextAreaProps) {
    return (
        <TextAreaContainer>
            <TextAreaLabel>{label}</TextAreaLabel>
            <StyledTextArea placeholder={placeholder} name={name}></StyledTextArea>
        </TextAreaContainer>
    )
}

export default TextArea;