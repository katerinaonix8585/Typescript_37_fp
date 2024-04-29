import { useEffect, useState } from 'react';
import { ButtonWrapper, DefaultResult, Lesson10Component, Result, ResultWrapper } from "./styles";
import Button from 'components/Button/Button';

function Lesson10() {

    const [fact, setFact] = useState<string[]>([]);        

    // Функция при нажатии кнопки Get More Info
    const buttonGetMoreInfo = () => {
        getFact();        
    };

    // Функция при нажатии кнопки Delete All data (передаем нулевой массив)
    const buttonDeleteAllData = () => {
        setFact([]);
    };


    // Обработка запроса
    const getFact = async () => {
        try {
           const response = await fetch('https://catfact.ninja/fact')
           const result = await response.json();
           console.log(result);
           
           if (!response.ok) {
              throw Object.assign(new Error('API Error'), {
                response: result
               });
            } else {
                setFact(prevFact => [...prevFact, result.fact]);
            }
        } catch(error) {
           console.log(error)
        } 
    }

    // При загрузке страницы
    useEffect(() => {        
       getFact();        
    }, []);

    // Отображаем содержимое странцийф по условию

    function showContent() {
        return fact.length > 0 ? (
            <ResultWrapper>
                {fact.map((fact, index) => (
                    <Result key={index}>{fact}</Result>
                ))}
            </ResultWrapper>
        ) : (
            <DefaultResult />
        );
    }    
 
return (
    <Lesson10Component>
       <ButtonWrapper>
       <Button name='GET MORE INFO'  onButtonClick={buttonGetMoreInfo}/>
       <Button name='DELETE ALL DATA' onButtonClick={buttonDeleteAllData}/>
       </ButtonWrapper>
       {showContent()}      
    </Lesson10Component>
  )
}

export default Lesson10;