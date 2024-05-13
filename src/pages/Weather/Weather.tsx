import { useState } from "react";
import { WeatherHeader, WeatherInputComponent, WeatherSearchWrapper, WeatherTitle, WeatherWrapper, WeatherButtonComponent } from "./style";
import WeatherError from "./components/WeatherError/WeatherError";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Spinner from 'components/Spinner/Spinner';
import { SpinnerContainer } from "lessons/Lesson10/styles";



function Weather (){
    const APP_ID = '2afde0e0bff5cf56123ac1d3cfe03658';

    const [info, setInfo] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [icon, setIcon] = useState<string>(''); 
    const [feelsLike, setFeelsLike] = useState<number>(0); 
    const [temp, setTemp] = useState<number>(0); 

    const getCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);        
    }

    
    const getWeather = async () => {
        try {

          setInfo(false);
          setError(false);
            
          if (!city) {
            alert("Введите город");
            return;
          }

          setIsLoading(true)
          console.log(city)          
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`);
          const result = await response.json();
          
          if (!response.ok) {
            const errorMessage = result.message;
            throw new Error(errorMessage);             
            } else {
            const icon = result.weather[0].icon;
            const feelsLike = result.main.feels_like;
            const temp = result.main.temp; 
            setInfo(true)
            setIcon(icon);
            setFeelsLike(feelsLike);
            setTemp(temp);        
          }
        } catch (error: any) {
            setError(true);
            setErrorMessage(error.message);            
        } finally {
            setIsLoading(false)
        }
      }

      

    return (
        <WeatherWrapper>
            <WeatherHeader>
            <WeatherTitle>Weather App</WeatherTitle>            
           </WeatherHeader>
           <WeatherSearchWrapper>
           <WeatherInputComponent name="city" placeholder="Enter city" onInput={getCity}></WeatherInputComponent>
           <WeatherButtonComponent onClick={getWeather}>Получить погоду</WeatherButtonComponent>
            </WeatherSearchWrapper>
            {isLoading ? 
               <SpinnerContainer><Spinner /></SpinnerContainer> :
                 (
                   <>
                   {info && <WeatherInfo icon={icon} feelsLike={feelsLike} temp={temp} city={city}/> }
                   {error && <WeatherError message={errorMessage}/>}
                   </>
                )
}
        </WeatherWrapper>
    )
}

export default Weather;