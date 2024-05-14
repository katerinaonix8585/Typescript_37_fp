import { IconFeellikes } from "assets";
import { WeatherCurrentIcon, WeatherCurrentInfoWrapper, WeatherCurrentTemp, WeatherCurrentTempTitle, WeatherCurrentTempWrapper, WeatherFillInfoIcon, WeatherFillInfoIconWrapper, WeatherFillInfoTitle, WeatherFillInfoWrapper, WeatherInfoWrapper } from "./styles";
import { WeatherProps } from "./types";

function WeatherInfo({icon, feelsLike, temp, city }: WeatherProps) {
    return (
        <WeatherInfoWrapper>

           <WeatherCurrentInfoWrapper>
               <WeatherCurrentTempWrapper>
                  <WeatherCurrentTempTitle>{temp}°</WeatherCurrentTempTitle>
                  <WeatherCurrentTemp>{city}</WeatherCurrentTemp>
               </WeatherCurrentTempWrapper>
               <WeatherCurrentTempWrapper>
                  <WeatherCurrentIcon src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
               </WeatherCurrentTempWrapper>               
           </WeatherCurrentInfoWrapper>

           <WeatherFillInfoWrapper>
                <WeatherCurrentTempWrapper>
                <WeatherFillInfoIconWrapper>
                <WeatherFillInfoIcon src={IconFeellikes} />
                <WeatherCurrentTemp>FEELS LIKE</WeatherCurrentTemp>
                </WeatherFillInfoIconWrapper>
                <WeatherFillInfoTitle>{feelsLike}°</WeatherFillInfoTitle>
                </WeatherCurrentTempWrapper>
           </WeatherFillInfoWrapper>          
        

        </WeatherInfoWrapper>
    )
  }
  
  export default WeatherInfo;