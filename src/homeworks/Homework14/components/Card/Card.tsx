import Message from "../Message/Message";
import { CardTitle, CardWrapper } from "./styles";
import { PersonProps } from "./types";




function Card () {

 return (
    <CardWrapper>
       <CardTitle>Екатерина Козлова</CardTitle> 
       <Message />   
    </CardWrapper>
    
 )
}

export default Card;