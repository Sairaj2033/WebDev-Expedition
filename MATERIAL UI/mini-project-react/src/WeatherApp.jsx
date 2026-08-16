import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState( {
        city:"Wonderland",
        feelslike:24.84,
        temp: 25.05,
        tempMin: 46.3,
        tempMax:37,
        weather:"haze"  
   });

    
   let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo);
   }


    return ( 
        <div style={{textAlign:"center"}} >
          <h2>Weather App By Delta</h2>

         <SearchBox updateInfo={updateInfo } ></SearchBox>
         <InfoBox info={weatherInfo} ></InfoBox>

        </div>
     )
 
}