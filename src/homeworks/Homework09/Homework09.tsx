import { Homework09Wrapper, InputComponent, ButtonComponent, LabelComponent, TextComponent } from "./styles";
import { ChangeEvent, useState } from "react";

function Homework09 (){
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [outputValue1, setOutputValue1] = useState<string>(''); 
    const [outputValue2, setOutputValue2] = useState<string>('');

    const OnChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }  
  
    const OnChangeInput2 = (event:ChangeEvent<HTMLInputElement>) => {
      setInputValue2(event.target.value)
    }  

    const handleButtonClick = () => {
      setOutputValue1(inputValue);
      setOutputValue2(inputValue2);
    }

    return (
        <Homework09Wrapper>
            <InputComponent name="value_1" placeholder="value 1" value={inputValue} onChange={OnChangeInput} />
            <InputComponent name="value_2" placeholder="value 2" value={inputValue2} onChange={OnChangeInput2} />
            <ButtonComponent name="Output of value" onClick={handleButtonClick}>Output of value</ButtonComponent>
            <LabelComponent>Value 1:</LabelComponent>
            <TextComponent>{outputValue1}</TextComponent>
            <LabelComponent>Value 2:</LabelComponent>
            <TextComponent>{outputValue2}</TextComponent>
        </Homework09Wrapper>
    );
}

export default Homework09;