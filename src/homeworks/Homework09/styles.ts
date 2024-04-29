import styled from "@emotion/styled";

export const Homework09Wrapper = styled.div`
   display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 30px;
  padding: 40px; 
`;

export const InputComponent = styled.input`
  width: 200px;
  height: 50px;
  border: 2px solid blue;
  padding: 10px;
  font-size: 24px;
  border-radius: 4px;
`;

export const LabelComponent = styled.label`
  font-size: 20px;
  font-weight: bold; 
`;

export const TextComponent = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 200px;
  height: 50px;
  font-size: 24px;
  color: green;
  border:  2px black solid;
`;

export const ButtonComponent = styled.button`
   width: 200px;
   height: 70px;
   outline: none;
   border: none;
   border-radius: 4px;
   padding: 20px;
   background-color: bisque;
   color: black;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
`;

