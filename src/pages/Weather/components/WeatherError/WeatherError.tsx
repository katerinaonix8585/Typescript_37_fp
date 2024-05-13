import { WeatherErrorMessage, WeatherErrorTitle, WeatherErrorWrapper } from "./styles";
import { WeatherErrorProps } from "./types";


function WeatherError({message}: WeatherErrorProps) {
    return (
        <WeatherErrorWrapper>   
            <WeatherErrorTitle>API Error</WeatherErrorTitle>
            <WeatherErrorMessage>{message}</WeatherErrorMessage>          
        

        </WeatherErrorWrapper>
    )
  }
  
  export default WeatherError;