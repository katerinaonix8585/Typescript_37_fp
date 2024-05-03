import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";



export const Lesson10Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 500px;
  
`
export const FactsBlock = styled.div`
  /* display: ${({isShowBlock}) = isShowBlock ? 'flex' : 'none'};* */
  flex-direction: column;  
  gap: 30px;
  min-width: 500px;
  max-height: 700px;
  overflow: auto;
  padding: 40px;
  background: #F03930;
  font-size: 30px;
  color: white;

`

export const CatFactWrapper = styled.div`
  border: 2px solid gray;
  max-height: 700px;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: left;
  gap: 20px;
`

export const Result = styled.p`
 align-items: left;
 font-size: 20px;
`

export const ResultWrapper = styled.div`
 background-color: aliceblue;
 border: 2px solid gray;
 max-height: 700px;
 width: 100%;
 overflow: auto;
 display: flex;
 flex-direction: column;
 padding: 10px;
 align-items: left;
 gap: 20px;
`

export const DefaultResult = styled.div`

`



