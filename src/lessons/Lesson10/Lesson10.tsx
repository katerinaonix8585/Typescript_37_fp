import { useEffect, useState } from 'react';
import { ButtonsContainer, FactsBlock, CatFactWrapper, Lesson10Component } from "./styles";
import Button from 'components/Button/Button';
import { v4 } from 'uuid';

function Lesson10() {
    const [catFacts, setCatFacts] = useState<string[]>([]);        

    // Функция при нажатии кнопки Get More Info
    const buttonGetMoreInfo = () => {
        getCatFact();        
    };

    // Функция при нажатии кнопки Delete All data (передаем нулевой массив)
    const buttonDeleteAllData = () => {
        setCatFacts([]);
    };


    // Обработка запроса
    const getCatFact = async () => {
        try {
           const response = await fetch('https://catfact.ninja/fact')
           const result = await response.json();           
           
           if (!response.ok) {
              throw Object.assign(new Error('API Error'), {
                response: result
               });
            } else {
                setCatFacts(prevValue => [...prevValue, result.fact]);
            }
        } catch(error) {
           console.log(error)
        } 
    }

    // При загрузке страницы
    useEffect(() => {        
        getCatFact();        
    }, []);

    // Отображаем содержимое странцийф по условию

    const catFactsElements = catFacts.map((catFact: string, index) => {
        return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>
    })
            
         
 
return (
    <Lesson10Component>
       <ButtonsContainer>
         <Button name='GET MORE INFO'  onButtonClick={buttonGetMoreInfo}/>
         <Button name='DELETE ALL DATA' onButtonClick={buttonDeleteAllData}/>
       </ButtonsContainer>
       <FactsBlock>{catFactsElements}</FactsBlock>
             
    </Lesson10Component>
  )
}

export default Lesson10;