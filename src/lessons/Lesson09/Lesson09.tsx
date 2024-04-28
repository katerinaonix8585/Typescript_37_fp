import { ChangeEvent, useEffect, useState } from 'react';

import {
    InputExample,
    Lesson09Component,
    Result
  } from './styles';
  
  function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const OnChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }  

  const OnChangeInput2 = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value)
  }  

  useEffect(()=>{
    console.log('Mounting');
  },[]);
  
  useEffect(()=>{
    console.log('Updating');
  },[inputValue])  


  useEffect(()=>{
    console.log('Updating');
  },[inputValue])  

  useEffect(()=>{
    return () => {console.log('Unmouting');}
    
  },[inputValue])  
  
//   console.log('render');

    return (
      <Lesson09Component>
         <InputExample name='example' placeholder='example text' onChange={OnChangeInput}/>
         <InputExample name='example2' placeholder='example text2' onChange={OnChangeInput2}/>
         <Result>{inputValue}</Result> 
      </Lesson09Component>
    )
  }
  
  export default Lesson09